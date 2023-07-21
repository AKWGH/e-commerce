import React from "react";

import Product from "../components/Product";

const GridView = ({ filtered_products }) => {
  return (
    <section>
      <div className="grid-products-container">
        {filtered_products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
