import React from "react";

const CartColumns = () => {
  return (
    <div className="cart-columns-width">
      <div className="cart-columns">
        <h5 className="one">item</h5>
        <h5 className="two">price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </div>
  );
};

export default CartColumns;
