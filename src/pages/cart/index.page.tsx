import Head from "next/head";
import CartTable from "./components/CartTable";
import CartTotal from "./components/CartTotal";
import Header from "../../components/Header";
import { CartWrapper } from "./styles";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link
          rel="icon"
          href="favicon.svg
        "
        />
      </Head>

      <Header />
      <CartWrapper>
        <h1>Cart</h1>
        <main>
          <div className="content-cart">
            <CartTable />
            <CartTotal />
          </div>
        </main>
      </CartWrapper>
    </>
  );
}
