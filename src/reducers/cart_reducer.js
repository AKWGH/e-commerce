import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../utils/actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    // passing in values from addToCart
    const { id, color, amount, product } = action.payload;
    // checks if item is in the cart
    const tempItem = state.cart.find((i) => i.id === id + color);

    // if item is already in the cart
    if (tempItem) {
      // iterate over the cart
      const tempCart = state.cart.map((cartItem) => {
        // finds the item
        if (cartItem.id === id + color) {
          // increases the amount
          let newAmount = cartItem.amount + amount;
          // checks if the value is greater than the max in stock
          if (newAmount > cartItem.max) {
            // if greater we set the amount to the max available
            newAmount = cartItem.max;
          }
          // spread the properties and adjust the amount to the new amount
          return { ...cartItem, amount: newAmount };
        } else {
          // returns other cartItems not changing
          return cartItem;
        }
      });
      // returns the state and the updated cart value
      return { ...state, cart: tempCart };
      // if not in cart we create a new item to add
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      // adds the new item to the cart
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;

        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_amount, total_items };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
