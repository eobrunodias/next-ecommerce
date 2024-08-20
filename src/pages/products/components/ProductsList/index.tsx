import React from "react";
import { ProductType } from "../../../../services/products";
import ProductCard from "../ProductCard";
import { ProductListWrapper } from "./styles";

type ProductListProps = {
  products: ProductType[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </ProductListWrapper>
  );
}
