import React from "react";

import { useFilterContext } from "../contexts/filter_context";

import { FaCheck } from "react-icons/fa";
import { formatPrice, getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  // console.log(categories);
  // console.log(companies);
  // console.log(colors);

  return (
    <section className="test">
      <div className="filter-content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
          {/* categories */}
          <div className="form-control">
            <h5 className="filter-title">category</h5>
            <div className="categories-container">
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={
                      category === c.toLowerCase() ? "active-category" : null
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className="form-control">
            <h5 className="filter-title">company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company-input"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colours */}
          <div className="form-control">
            <h5 className="filter-title">colours</h5>
            <div className="colours-form-container">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClickCapture={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active-category" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    data-color={c}
                    onClick={updateFilters}
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "colour-btn active-colour" : "colour-btn"
                    }`}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colours */}
          {/* price */}
          <div className="form-control">
            <h5 className="filter-title">price</h5>
            <p className="price-input">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="form-control shipping">
            <label className="filter-title" htmlFor="shipping">
              free shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button className="clear-btn" type="button" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
