import Head from "next/head";
import Header from "../../components/Header";
import ProductsList from "./components/ProductsList";
import { ReactNode } from "react";
import { GetStaticProps } from "next";
import { fetchProducts, ProductType } from "../../services/products";
import { ProductsWrapper } from "./styles";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();
  return { props: { products } };
};

export default function Products(props: {
  children?: ReactNode;
  products?: ProductType[];
}) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <ProductsWrapper>
        <h1>Products</h1>
        <ProductsList products={props.products!} />
      </ProductsWrapper>
    </>
  );
}
