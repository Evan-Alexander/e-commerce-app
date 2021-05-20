import {
  GET_PRODUCTS_BY_AMOUNT_SOLD,
  GET_PRODUCTS_BY_DATE,
  SUCCESS_GLOBAL,
  ERROR_GLOBAL,
  CLEAR_NOTIFICATION,
  AUTH_USER,
  USER_SIGN_OUT,
  UPDATE_USER_PROFILE,
  UPDATE_USER_EMAIL,
  GET_PAGINATED_PRODUCTS,
  REMOVE_PRODUCT,
  GET_BRANDS,
  ADD_PRODUCT,
  CLEAR_ADDED_PRODUCT,
} from "../types";

// USERS
export const authenticateUser = (user) => ({
  type: AUTH_USER,
  payload: user,
});

export const userSignOut = () => ({
  type: USER_SIGN_OUT,
});

export const updateUserProfile = (userData) => ({
  type: UPDATE_USER_PROFILE,
  payload: userData,
});
export const updateUserEmail = (userData) => ({
  type: UPDATE_USER_EMAIL,
  payload: userData,
});

// PRODUCTS
export const productsBySold = (data) => ({
  type: GET_PRODUCTS_BY_AMOUNT_SOLD,
  payload: data,
});

export const productsByDate = (data) => ({
  type: GET_PRODUCTS_BY_DATE,
  payload: data,
});

export const paginatedProducts = (products) => ({
  type: GET_PAGINATED_PRODUCTS,
  payload: products,
});

export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});

export const removeProduct = () => ({
  type: REMOVE_PRODUCT,
});

export const clearAddedProduct = () => {
  return {
    type: CLEAR_ADDED_PRODUCT,
  };
};

// NOTIFICATIONS
export const successGlobal = (msg) => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const errorGlobal = (msg) => ({
  type: ERROR_GLOBAL,
  payload: msg,
});

export const clearNotification = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  };
};

// BRANDS
export const getBrands = (brands) => ({
  type: GET_BRANDS,
  payload: brands,
});
