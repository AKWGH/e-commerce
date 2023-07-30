import React from "react";

import GridView from "./GridView";
import ListView from "./ListView";

import { useFilterContext } from "../contexts/filter_context";
const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();

  if (filtered_products.length < 1) {
    return (
      <div className="error-message-container">
        <h5 style={{ textTransform: "none" }}>
          Sorry no products matched your search
        </h5>
      </div>
    );
  }
  if (grid_view === false) {
    return <ListView filtered_products={filtered_products}></ListView>;
  }

  return <GridView filtered_products={filtered_products}></GridView>;
};

export default ProductList;
