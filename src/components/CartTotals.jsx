import React from "react";

import { useCartContext } from "../contexts/cart_context";
import { formatPrice } from "../utils/helpers";

import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <section className="cart-total-section">
      <div>
        <article className="cart-total">
          <h5>
            Subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn cart-total-link">
          Proceed to checkout
        </Link>
      </div>
    </section>
  );
};

export default CartTotals;
