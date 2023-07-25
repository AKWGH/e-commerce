import React from "react";

import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useCartContext } from "../contexts/cart_context";
import CartContent from "../components/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <main className="cart-page-height">
        <div className="empty">
          <h2>your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="cart-page-height">
      <PageHero title="cart" />
      <div>
        <CartContent />
      </div>
    </main>
  );
};

export default CartPage;
