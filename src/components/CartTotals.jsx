import React from "react";

import { useCartContext } from "../contexts/cart_context";
import { useUserContext } from "../contexts/user_context";
import { formatPrice } from "../utils/helpers";

import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee, free_shipping } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <section className="cart-total-section">
      <div>
        <article className="cart-total">
          <h5>
            Subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee :{" "}
            <span>
              {free_shipping ? formatPrice(0) : formatPrice(shipping_fee)}
            </span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>
              {free_shipping
                ? formatPrice(total_amount)
                : formatPrice(total_amount + shipping_fee)}
            </span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn cart-total-link">
            Proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            className="btn cart-total-link"
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotals;
