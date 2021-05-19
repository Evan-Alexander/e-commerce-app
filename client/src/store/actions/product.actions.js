import * as actions from "./index";
import axios from "axios";

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
