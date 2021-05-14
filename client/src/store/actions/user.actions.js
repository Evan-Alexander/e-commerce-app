import * as actions from "./index";
import axios from "axios";
import {
  getAuthHeader,
  getTokenCookie,
  removeTokenCookie,
} from "../../components/utils/tools";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const registerUser = (values) => {
  return async (dispatch) => {
    try {
      const user = await axios.post(`/api/auth/register`, {
        email: values.email,
        password: values.password,
      });
      dispatch(actions.authenticateUser({ data: user.data.user, auth: true }));
      dispatch(
        actions.successGlobal(
          "Welcome!! Check your email to verify your account."
        )
      );
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const signInUser = (values) => {
  return async (dispatch) => {
    try {
      const user = await axios.post(`/api/auth/signin`, {
        email: values.email,
        password: values.password,
      });
      dispatch(actions.authenticateUser({ data: user.data.user, auth: true }));
      dispatch(actions.successGlobal("Welcome!!"));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const isAuthUser = () => {
  return async (dispatch) => {
    try {
      if (!getTokenCookie()) {
        throw new Error();
      }

      const user = await axios.get(`/api/auth/isauth`, getAuthHeader());

      console.log(user);

      dispatch(actions.authenticateUser({ data: user.data, auth: true }));
    } catch (error) {
      dispatch(actions.authenticateUser({ data: {}, auth: false }));
    }
  };
};
