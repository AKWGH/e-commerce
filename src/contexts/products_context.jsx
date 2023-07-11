import React, { createContext, useContext, useEffect, useReducer } from "react";

// products reducer
import reducer from "../reducers/products_reducer";
// actions
import { SIDEBAR_OPEN, SIDEBAR_CLOSED } from "../utils/actions";

// default state
const initialState = {
  isSidebarOpen: false,
};

// creates context
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSED });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

// custom hook to use the products context
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
