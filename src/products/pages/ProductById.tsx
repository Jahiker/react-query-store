import { useParams } from "react-router-dom";
import { ProductCard, useProduct } from "..";

export const ProductById = () => {
  const { id } = useParams();

  const { product, isLoading } = useProduct({ id: +id! });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto {product ? product.title : ''}</h1>

      {isLoading && <p>Loading...</p>}
      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
};
