import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { ProductType } from "../../../../services/products";
import SuccessToast from "../../../../components/SuccessToast";
import { ProductDetailsContainer } from "./styles";
import Button from "@/src/components/Button";

type ProductDetailsProps = {
  product: ProductType;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = useCart();

  return (
    <ProductDetailsContainer>
      <Image
        src={product.imageUrl}
        alt={product.name}
        height={500}
        width={600}
        priority
      />

      <div>
        <h1>{product.name}</h1>

        <h2>$ {product.price}</h2>

        <p>
          <span>
            <strong>Description: </strong>
          </span>
          {product.description}
        </p>

        <p>
          <strong>In stock:</strong> {product.inStock}
        </p>

        <Button
          onClick={() => {
            addProduct(product);
            setToastIsOpen(true);
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
          }}
        >
          BUY NOW
        </Button>

        {/* <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        /> */}
      </div>
    </ProductDetailsContainer>
  );
}
