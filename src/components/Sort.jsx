import React from "react";

import { useFilterContext } from "../contexts/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();

  return (
    <section className="sort-section">
      <div className="btns-container-sort">
        <button
          onClick={setGridView}
          type="button"
          className={`${
            grid_view ? "active-list-type list-type-btn" : "list-type-btn"
          }`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          type="button"
          className={`${
            !grid_view ? "active-list-type list-type-btn" : "list-type-btn"
          }`}
        >
          <BsList />
        </button>
      </div>
      <p>{filtered_products.length} products found</p>
      <hr />
      <form>
        <label className="sort-label" htmlFor="sort">
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
