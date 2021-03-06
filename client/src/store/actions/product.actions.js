import * as actions from "./index";
import axios from "axios";

import {
  getAuthHeader,
  removeTokenCookie,
  getTokenCookie,
} from "../../components/utils/tools";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const productsBySort = ({ limit, sortBy, order, where }) => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`/api/products/all`, {
        params: {
          limit,
          sortBy,
          order,
        },
      });

      switch (where) {
        case "byAmountSold":
          dispatch(actions.productsBySold(products.data));
          break;
        case "byDate":
          dispatch(actions.productsByDate(products.data));
          break;
        default:
          return false;
      }
    } catch (error) {
      dispatch(
        actions.errorGlobal("No resources found by that type.  Try again.")
      );
    }
  };
};

export const paginatedProducts = (args) => {
  return async (dispatch) => {
    try {
      const products = await axios.post(`/api/products/paginate/all`, args);
      dispatch(actions.paginatedProducts(products.data));
    } catch (error) {
      actions.errorGlobal("No products found.  Try again.");
    }
  };
};

export const removeProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/products/product/${id}`, getAuthHeader());
      dispatch(actions.removeProduct());
      dispatch(actions.successGlobal());
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      const newProduct = await axios.post(
        `/api/products/`,
        data,
        getAuthHeader()
      );
      dispatch(actions.addProduct(newProduct.data));
      dispatch(actions.successGlobal());
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
