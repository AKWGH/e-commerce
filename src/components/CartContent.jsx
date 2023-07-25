import React from "react";
import { useCartContext } from "../contexts/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";

import { Link } from "react-router-dom";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <section>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr className="line-90" />
      <div className="cart-link-container">
        <Link to="/products" className="btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="clear-btn clear-cart-btn"
          onClick={clearCart}
        >
          clear Cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};

export default CartContent;
