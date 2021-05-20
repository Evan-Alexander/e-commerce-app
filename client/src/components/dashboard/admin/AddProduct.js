import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../store/actions/brand.actions";
import { addProduct } from "../../../store/actions/product.actions";
import { clearAddedProduct } from "../../../store/actions/index";
import { useFormik } from "formik";
import { validation } from "./formValues";
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

const AddProduct = (props) => {
  const [loading, setLoading] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const brands = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      model: "",
      brand: "",
      frets: "",
      woodtype: "",
      description: "",
      price: "",
      available: "",
      shipping: false,
    },
    validationSchema: validation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    setLoading(true);
    dispatch(addProduct(values));
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      setLoading(false);
      props.history.push("/api/admin/admin_products");
    }
    if (notifications && notifications.error) {
      setLoading(false);
    }
  }, [notifications]);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearAddedProduct());
    };
  }, [dispatch]);

  return (
    <DashboardLayout title="Add Product">
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={formik.handleSubmit} className="mt-3 input-container">
          <TextField
            name="model"
            label="Enter a model"
            variant="outlined"
            {...formik.getFieldProps("model")}
            {...errorHelper(formik, "model")}
          />
          <TextField
            name="frets"
            label="Enter the number of frets"
            type="number"
            variant="outlined"
            {...formik.getFieldProps("frets")}
            {...errorHelper(formik, "frets")}
          />
          <TextField
            name="woodtype"
            label="Enter a woodtype"
            variant="outlined"
            {...formik.getFieldProps("woodtype")}
            {...errorHelper(formik, "woodtype")}
          />
          <FormControl variant="outlined">
            <h5>Select a brand</h5>
            <Select
              name="brand"
              {...formik.getFieldProps("brand")}
              error={formik.errors.brand && formik.touched.brand ? true : false}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {brands && brands.allBrands
                ? brands.allBrands.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))
                : null}
            </Select>
            {formik.errors.brand && formik.touched.brand ? (
              <FormHelperText error={true}>
                {formik.errors.brand}
              </FormHelperText>
            ) : null}
          </FormControl>
          <TextField
            name="description"
            label="Enter the description"
            variant="outlined"
            {...formik.getFieldProps("description")}
            {...errorHelper(formik, "description")}
            multiline
            rows={4}
          />
          <TextField
            name="price"
            label="Enter the price"
            variant="outlined"
            type="number"
            {...formik.getFieldProps("price")}
            {...errorHelper(formik, "price")}
          />
          <Divider className="mt-3 mb-3" />
          <TextField
            name="available"
            label="How many do we have available?"
            variant="outlined"
            type="number"
            {...formik.getFieldProps("available")}
            {...errorHelper(formik, "available")}
          />
          <Divider className="mt-3 mb-3" />
          <FormControl variant="outlined">
            <h5>Do we offer free shipping?</h5>
            <Select
              name="shipping"
              {...formik.getFieldProps("shipping")}
              error={
                formik.errors.shipping && formik.touched.shipping ? true : false
              }
            >
              <MenuItem value={true}> Yes </MenuItem>
              <MenuItem value={false}> No </MenuItem>
            </Select>
            {formik.errors.shipping && formik.touched.shipping ? (
              <FormHelperText error={true}>
                {formik.error.shipping}
              </FormHelperText>
            ) : null}
          </FormControl>
          <Divider className="mt-3 mb-3" />

          <Button variant="contained" color="primary" type="submit">
            Add product
          </Button>
        </form>
      )}
    </DashboardLayout>
  );
};

export default AddProduct;
