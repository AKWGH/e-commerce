import React, { createContext, useContext, useEffect, useReducer } from "react";

// cart reducer
import reducer from "../reducers/cart_reducer";
// actions
import {
  ADD_TO_CART,
  CHECK_FREE_SHIPPING,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../utils/actions";

// checks localStorage for the cart
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else return [];
};
// default state
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 399,
  free_shipping: true,
};

// creates context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, color, amount, product, shipping) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, amount, product, shipping },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // sets the data and saves it to the local storage everytime theres a change to the cart state
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    dispatch({ type: CHECK_FREE_SHIPPING });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook to use the products context
export const useCartContext = () => {
  return useContext(CartContext);
};
