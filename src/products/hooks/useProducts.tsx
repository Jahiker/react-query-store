import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {
  const { isLoading, isFetching, isError, data: products = [], error } = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => productsActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60
  });

  return {
    isLoading,
    isFetching,
    isError,
    products,
    error,
  };
};
