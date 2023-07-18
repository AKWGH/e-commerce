import React, { useContext, createContext, useReducer, useEffect } from "react";

// filter reducer
import reducer from "../reducers/filter_reducer";

// actions
import { LOAD_PRODUCTS } from "../utils/actions";

// products context
import { useProductsContext } from "./products_context";

// default state
const initialState = {
  filtered_products: [],
  all_products: [],
};

// creates context
const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return <FilterContext.Provider value={{}}>{children}</FilterContext.Provider>;
};

// custom hook to use the filter context
export const useFilterContext = () => {
  return useContext(FilterContext);
};
