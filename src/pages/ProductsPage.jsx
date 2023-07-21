import React from "react";

import PageHero from "../components/PageHero";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />

      <div className="products-page-content-container">
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
