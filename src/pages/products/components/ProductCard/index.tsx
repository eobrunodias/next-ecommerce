import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { ProductType } from "../../../../services/products";
import SuccessToast from "../../../../components/SuccessToast";
import { FooterCard, ProductCardContainer } from "./styles";
import Button from "@/src/components/Button";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { id, name, imageUrl, price } = product;
  const { addProduct } = useCart();

  return (
    <>
      <ProductCardContainer>
        <Link href={`/products/${id}`}>
          <Image
            src={imageUrl}
            alt={product.name}
            height={300}
            width={400}
            priority
          />
        </Link>

        <FooterCard>
          <Link href={`/products/${id}`}>
            <h5 style={{ cursor: "pointer" }}>{name}</h5>
          </Link>

          <span className="price">$ {price}</span>

          <Button
            onClick={() => {
              addProduct(product);
              setToastIsOpen(true);
              setTimeout(() => setToastIsOpen(false), 1000 * 3);
            }}
          >
            Add to cart
          </Button>
        </FooterCard>
      </ProductCardContainer>

      {/* <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} /> */}
    </>
  );
}
