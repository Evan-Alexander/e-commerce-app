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
