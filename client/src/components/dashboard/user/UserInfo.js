import React from "react";
import DashboardLayout from "../../../hoc/DashboardLayout";
import EmailStepper from "./Stepper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { errorHelper } from "../../utils/tools";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { updateUserProfile } from "../../../store/actions/user.actions";

const UserInfo = ({ users }) => {
  const { firstname, lastname } = users.data;

  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname,
      lastname,
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(30, "30 character max")
        .required("You must provide a firstname"),
      lastname: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(30, "30 character max")
        .required("You must provide a lastname"),
    }),
    onSubmit: (values) => {
      dispatch(updateUserProfile(values));
    },
  });
  return (
    <DashboardLayout title="User information">
      <form
        onSubmit={formik.handleSubmit}
        className="mt-3 article_form input-container"
      >
        <TextField
          style={{ width: "100%" }}
          name="firstname"
          label="Enter your firstname"
          variant="outlined"
          {...formik.getFieldProps("firstname")}
          {...errorHelper(formik, "firstname")}
        />
        <TextField
          style={{ width: "100%" }}
          name="lastname"
          label="Enter your lastname"
          variant="outlined"
          {...formik.getFieldProps("lastname")}
          {...errorHelper(formik, "lastname")}
        />
        <Button
          className="mb-3"
          variant="contained"
          color="primary"
          type="submit"
        >
          Edit profile
        </Button>
      </form>
      <hr />
      <div>
        <EmailStepper user={users} />
      </div>
    </DashboardLayout>
  );
};

export default UserInfo;
