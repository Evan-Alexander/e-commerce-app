import {
  GET_PRODUCTS_BY_AMOUNT_SOLD,
  GET_PRODUCTS_BY_DATE,
  GET_PAGINATED_PRODUCTS,
  ADD_PRODUCT,
  CLEAR_ADDED_PRODUCT,
} from "../types";

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_AMOUNT_SOLD:
      return { ...state, byAmountSold: action.payload };
    case GET_PRODUCTS_BY_DATE:
      return { ...state, byDate: action.payload };
    case GET_PAGINATED_PRODUCTS:
      return { ...state, paginatedProducts: action.payload };
    case ADD_PRODUCT:
      return { ...state, lastAdded: action.payload };
    case CLEAR_ADDED_PRODUCT:
      return { ...state, lastAdded: null };
    default:
      return state;
  }
}
