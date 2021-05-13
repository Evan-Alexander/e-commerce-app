import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../utils/Loader";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, signInUser } from "../../store/actions/user.actions";
import { TextField, Button } from "@material-ui/core";
import { errorHelper } from "../utils/tools";

import "./auth.css";

const AuthForm = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("You must provide an email")
        .email("You must provide a valid email"),
      password: Yup.string()
        .required("You must provide a password")
        .min(5, "Password needs to be at least 5 characters."),
    }),
    onSubmit: (values) => {
      setLoading(true);
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (props.formType) {
      // register
      dispatch(registerUser(values));
    } else {
      // sign in
      dispatch(signInUser(values));
    }
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      setLoading(false);
      props.history.push("/dashboard");
    } else {
      setLoading(false);
    }
  }, [notifications, props.history]);

  return (
    <>
      <div className="auth_container">
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={formik.handleSubmit} className="mt-3 input-container">
            <TextField
              className="auth-input"
              style={{ width: "100%" }}
              name="email"
              label="Enter your email"
              variant="outlined"
              {...formik.getFieldProps("email")}
              {...errorHelper(formik, "email")}
            />

            <TextField
              className="auth-input"
              style={{ width: "100%" }}
              name="password"
              label="Enter your password"
              variant="outlined"
              type="password"
              {...formik.getFieldProps("password")}
              {...errorHelper(formik, "password")}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="medium"
            >
              {props.formType ? "Register" : "Sign In"}
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default AuthForm;
