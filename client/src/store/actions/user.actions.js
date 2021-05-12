import * as actions from "./index";
import axios from "axios";

export const registerUser = (values) => {
  return async (dispatch) => {
    try {
      const user = await axios.post(`/api/auth/register`, {
        email: values.email,
        password: values.password,
      });
      dispatch(actions.authenticateUser({ data: user.data.user, auth: true }));
      dispatch(
        actions.successGlobal("Welcome !! check you mail to verify account.")
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
