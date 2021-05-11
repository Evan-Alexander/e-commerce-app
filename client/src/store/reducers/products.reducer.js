import { GET_PRODUCTS_BY_AMOUNT_SOLD, GET_PRODUCTS_BY_DATE } from "../types";

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_AMOUNT_SOLD:
      return { ...state, byAmountSold: action.payload };
    case GET_PRODUCTS_BY_DATE:
      return { ...state, byDate: action.payload };
    default:
      return state;
  }
}
