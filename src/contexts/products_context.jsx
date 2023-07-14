import React, { createContext, useContext, useEffect, useReducer } from "react";

// axios requests
import axios from "axios";

// products reducer
import reducer from "../reducers/products_reducer";
// actions
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSED,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../utils/actions";
// url for data fetch
import { products_url } from "../utils/data";

// default state
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
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

  const fetchProducts = async (products_url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(products_url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch(GET_PRODUCTS_ERROR);
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

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
