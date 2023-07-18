// actions
import { LOAD_PRODUCTS } from "../utils/actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      // copies values so we don't reference the same place in memory
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
