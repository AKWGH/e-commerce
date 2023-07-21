import React, { useContext, createContext, useReducer, useEffect } from "react";

// filter reducer
import reducer from "../reducers/filter_reducer";

// actions
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../utils/actions";

// products context
import { useProductsContext } from "./products_context";

// default state
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
};

// creates context
const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// custom hook to use the filter context
export const useFilterContext = () => {
  return useContext(FilterContext);
};
