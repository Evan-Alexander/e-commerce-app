import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../../store/actions/product.actions";
import { useFormik } from "formik";
import { errorHelper } from "../../utils/tools";
import Loader from "../../utils/Loader";
import {
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

const AddProduct = () => {
  return (
    <div>
      <h1>add product</h1>
    </div>
  );
};

export default AddProduct;
