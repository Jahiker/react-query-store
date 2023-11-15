import { type Product, type ProductDTO, productsApi } from "..";

interface GetProductsOptions {
  filterKey?: string;
}

/**
 * Retard request just for educational purposes
 * @param seconds: Number of seconds
 * @returns boolean: true when the timeout is reached
 */
const sleep = (seconds: number): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds);
  });
};

/**
 * Get all products by a filter Key
 * @param { filterKey: string } key
 * @returns Products: Product[]
 */
export const getProducts = async ({
  filterKey,
}: GetProductsOptions): Promise<Product[]> => {
  const filterUrl = filterKey ? `?category=${filterKey}` : "";

  await sleep(2000);

  const { data } = await productsApi.get<Product[]>(`/products${filterUrl}`);

  return data;
};

/**
 * Get one product by ID
 * @param id: ID of product
 * @returns Product: Product
 */
export const getProductById = async (id: number): Promise<Product> => {
  await sleep(2000);

  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data;
};

/**
 * Create a new product
 * @param product: ProductDTO
 * @returns product: Product
 */
export const createProduct = async (product: ProductDTO) => {
  await sleep(5000);

  const { data } = await productsApi.post<Product>(`/products`, product);

  return data;
};
