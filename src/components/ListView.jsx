import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ filtered_products }) => {
  return (
    <section className="listview-section">
      {filtered_products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <article key={id}>
            <img className="listview-img" src={image} alt={name} />
            <div>
              <h4 className="listview-name">{name}</h4>
              <h5 className="listview-price">{formatPrice(price)}</h5>
              <p className="listview-description">
                {description.substring(0, 150)}...
              </p>
              <Link to={`/products/${id}`} className="btn listview-btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
