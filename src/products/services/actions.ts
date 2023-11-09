import { type Product, productsApi } from "..";

interface GetProductsOptions {
  filterKey?: string;
}

const sleep = (seconds: number): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds);
  });
};

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<Product[]> => {
  const filterUrl = filterKey ? `?category=${filterKey}` : "";

  await sleep(2000);

  const { data } = await productsApi.get<Product[]>(`/products${filterUrl}`);

  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  await sleep(2000);

  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data;
};