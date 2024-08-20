import { CartTotalContainer } from "./styles";

import { useCart } from "../../../../hooks/useCart";

const CartTotal = () => {
  const { cart } = useCart();

  return (
    <CartTotalContainer>
      <strong>Total:</strong>
      <span>$ {cart.reduce((total, product) => total + product.price, 0)}</span>
    </CartTotalContainer>
  );
};

export default CartTotal;
