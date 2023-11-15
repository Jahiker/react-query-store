export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}

export interface ProductDTO extends Omit<Product, "rating" | "id"> {
  id?: number;
}

export interface Rating {
  rate: number;
  count: number;
}
