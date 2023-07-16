import React from "react";

import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

import { useProductsContext } from "../contexts/products_context";

const FeaturedProducts = () => {
  const { featured_products, products_loading, products_error } =
    useProductsContext();

  if (products_loading) {
    return <Loading />;
  }
  if (products_error) {
    return <Error />;
  }

  return (
    <section className="featured-products-section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline centre"></div>
      </div>

      <div className="featured-products">
        {featured_products.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
