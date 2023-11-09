import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  id: number;
}

export const useProduct = ({ id }: Options) => {
  const {
    isLoading,
    isFetching,
    isError,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => productsActions.getProductById(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isFetching,
    isError,
    product,
    error,
  };
};
