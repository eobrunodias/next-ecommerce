import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { ProductType } from "../../../../services/products";
import {
  ButtonMinus,
  ButtonPlus,
  CartTableContainer,
  CartTableRowContainer,
} from "./styles";

type CartEntry = {
  product: ProductType;
  quantity: number;
};

const CartTableRow = (props: { entry: CartEntry }) => {
  const { addProduct, removeProduct } = useCart();

  return (
    <CartTableRowContainer>
      <Image
        src={props.entry.product.imageUrl}
        alt={props.entry.product.name}
        height={400}
        width={500}
        priority
      />
      <div className="details">
        <h2>{props.entry.product.name}</h2>
        <span>
          <strong>Price: </strong>$ {props.entry.product.price}
        </span>
        <span>
          <strong>Quantity: </strong>
          {props.entry.quantity}
        </span>
        <span>
          <strong>Total: </strong>${" "}
          {props.entry.product.price * props.entry.quantity}
        </span>
        <div>
          <ButtonPlus onClick={() => addProduct(props.entry.product)}>
            +
          </ButtonPlus>
          <ButtonMinus onClick={() => removeProduct(props.entry.product.id)}>
            –
          </ButtonMinus>
        </div>
      </div>
    </CartTableRowContainer>
  );
};

export default function CartTable() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);
  const { cart } = useCart();

  useEffect(() => {
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(
        (entry) => entry.product.id === product.id
      );

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ];
      }

      list[entryIndex].quantity++;
      return list;
    }, [] as CartEntry[]);

    entriesList.sort((a, b) => a.product.id - b.product.id);
    setCartEntries(entriesList);
  }, [cart]);

  return (
    <CartTableContainer>
      <div>
        {cartEntries.map((entry) => (
          <CartTableRow key={entry.product.id} entry={entry} />
        ))}
      </div>
    </CartTableContainer>
  );
}
