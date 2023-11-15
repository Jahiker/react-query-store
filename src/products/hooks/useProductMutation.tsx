import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, productsActions } from "..";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: productsActions.createProduct,
    // onMutate: (data) => {
    //   console.log("Mutation Optimistic Update", data);

    //   const optimisticProduct = { id: crypto.randomUUID(), ...data };

    //   queryClient.setQueryData(
    //     ["products", { filterKey: data.category }],
    //     (oldData: Product[]) => {
    //       if (!oldData) return [optimisticProduct];

    //       return [...oldData, optimisticProduct];
    //     }
    //   );

    //   return { optimisticProduct };
    // },
    onSuccess: (data, variables, context) => {
      console.log("Producto creado", { data, variables, context });

      queryClient.invalidateQueries({
        queryKey: ["products", { filterKey: data.category }],
      });

      //   queryClient.removeQueries(["product", context?.optimisticProduct.id])

      //   queryClient.setQueryData(
      //     ["products", { filterKey: data.category }],
      //     (oldData: Product[]) => {
      //       if (!oldData) return [];

      //       //   return [...oldData, data];

      //       return oldData.map((cacheProduct: Product) => {
      //         return cacheProduct.id === context?.optimisticProduct.id
      //           ? data
      //           : cacheProduct;
      //       });
      //     }
      //   );
    },
    onSettled: () => {
      console.log("On Settled");
    },
  });

  return productMutation;
};
