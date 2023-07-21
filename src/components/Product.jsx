import React from "react";

import { formatPrice } from "../utils/helpers";

import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const Product = ({ image, name, price, id }) => {
  return (
    <article>
      <div className="product-container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>
      <footer className="product-footer">
        <p>{name}</p>
        <p>{formatPrice(price)}</p>
      </footer>
    </article>
  );
};

export default Product;
