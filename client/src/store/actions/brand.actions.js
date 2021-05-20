import * as actions from "./index";
import axios from "axios";

import {
  getAuthHeader,
  removeTokenCookie,
  getTokenCookie,
} from "../../components/utils/tools";
// axios.defaults.headers.post["Content-Type"] = "application/json";

export const getBrands = () => {
  return async (dispatch) => {
    try {
      const brands = await axios.get(`/api/brands/all`);
      dispatch(actions.getBrands(brands.data));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
