import React from "react";
// react router
import { Link } from "react-router-dom";
// react-icons
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";

// context
import { useProductsContext } from "../contexts/products_context";
import { useCartContext } from "../contexts/cart_context";

const CartButtons = () => {
  // destructure from products context
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <div className="cart-buttons-container">
      <Link onClick={closeSidebar} to="/cart" className="cart-btn">
        Cart{" "}
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login <FaUserPlus />
      </button>
    </div>
  );
};

export default CartButtons;
