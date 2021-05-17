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

export const userSignOut = () => {
  return async (dispatch) => {
    try {
      removeTokenCookie();
      dispatch(actions.userSignOut());
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

export const updateUserProfile = (data) => {
  return async (dispatch, getState) => {
    try {
      const profile = await axios.patch(
        `/api/users/profile`,
        {
          data: data,
        },
        getAuthHeader()
      );

      const userData = {
        ...getState().users.data,
        firstname: profile.data.firstname,
        lastname: profile.data.lastname,
      };
      dispatch(actions.updateUserProfile(userData));
      dispatch(actions.successGlobal("Profile updated !!"));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
