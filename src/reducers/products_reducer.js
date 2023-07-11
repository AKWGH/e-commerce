// actions
import { SIDEBAR_OPEN, SIDEBAR_CLOSED } from "../utils/actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSED) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
