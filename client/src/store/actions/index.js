import { GET_PRODUCTS_BY_AMOUNT_SOLD, GET_PRODUCTS_BY_DATE } from "../types";

export const productsBySold = (data) => ({
  type: GET_PRODUCTS_BY_AMOUNT_SOLD,
  payload: data,
});

export const productsByDate = (data) => ({
  type: GET_PRODUCTS_BY_DATE,
  payload: data,
});