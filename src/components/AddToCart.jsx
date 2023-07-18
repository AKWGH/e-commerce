import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaCheck } from "react-icons/fa";

import AmountButtons from "./AmountButtons";

const AddToCart = ({ single_product }) => {
  const { id, stock, colors } = single_product;

  const [mainColour, setMainColour] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((old) => {
      let tempAmount = old + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((old) => {
      let tempAmount = old - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <section>
      <div className="colours-container">
        <span> colours : </span>
        <div className="colour-btns-container">
          {colors.map((color, index) => {
            return (
              <button
                style={{ background: color }}
                key={index}
                className={`${
                  mainColour === color
                    ? "colour-btn colour-active"
                    : "colour-btn"
                }`}
                onClick={() => setMainColour(color)}
              >
                {mainColour === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="amount-btns-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link to="/cart" className="btn add-to-cart-btn">
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
