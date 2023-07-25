import React from "react";

import { formatPrice } from "../utils/helpers";
import AmountButtons from "../components/AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../contexts/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <article className="cart-item">
      <div className="cart-title">
        <img className="cart-img" src={image} alt={name} />
        <div className="cart-item-values">
          <h5 className="cart-item-name">{name}</h5>
          <p className="cart-item-colour">
            colour :{" "}
            <span className="colour-span" style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price-big">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
