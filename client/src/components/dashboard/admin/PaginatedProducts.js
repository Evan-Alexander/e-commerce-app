import React, { useEffect, useReducer, useState } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  paginatedProducts,
  removeProduct,
} from "../../../store/actions/product.actions";
import ProductTable from "./ProductTable";
import { useFormik } from "formik";
import * as Yup from "yup";
import { errorHelper } from "../../utils/tools";
import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";

const defaultValues = {
  keywords: "",
  brand: [],
  min: 0,
  max: 5000,
  frets: [],
  page: 1,
};

const AdminProducts = (props) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [toRemove, setToRemove] = useState(null);
  const notifications = useSelector((state) => state.notifications);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchValues, setSearchValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultValues
  );

  const formik = useFormik({
    initialValues: { keywords: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(3, "Search needs to be longer than 3 letters")
        .max(50, "Search needs to be shorter than 50 letters"),
    }),
    onSubmit: (value, { resetForm }) => {
      setSearchValues({ keywords: value.keywords, page: 1 });
      resetForm();
    },
  });

  const goToPage = (page) => {
    setSearchValues({ page });
  };

  const goToEditPg = (id) => {
    props.history.push(`/dashboard/admin/edit_product/${id}`);
  };

  const handleCose = () => {
    setRemoveModal(false);
  };

  const handleModal = (id) => {
    setToRemove(id);
    setRemoveModal(true);
  };

  const handleRemove = () => {
    dispatch(removeProduct(toRemove));
  };

  const resetSearch = () => {
    setSearchValues(defaultValues);
  };

  useEffect(() => {
    dispatch(paginatedProducts(searchValues));
  }, [dispatch, searchValues]);

  useEffect(() => {
    handleCose();
    setRemoveModal(null);
    if (notifications && notifications.removeArticle) {
      dispatch(paginatedProducts(searchValues));
    }
  }, [dispatch, notifications]);

  return (
    <DashboardLayout title="Products">
      <div className="products_table">
        <form onSubmit={formik.handleSubmit} className="mt-3 input-container">
          <TextField
            style={{ width: "100%" }}
            name="keywords"
            label="Search for products"
            {...formik.getFieldProps("keywords")}
            {...errorHelper(formik, "keywords")}
          />
          <Button onClick={() => resetSearch()}>Reset Search</Button>
        </form>
      </div>
      <hr />
      <ProductTable
        products={products.paginatedProducts}
        previous={(page) => goToPage(page)}
        next={(page) => goToPage(page)}
        goToEditPg={(page) => goToEditPg(page)}
        removeModal={removeModal}
        handleClose={() => handleCose()}
        handleModal={(id) => handleModal(id)}
        handleRemove={() => handleRemove()}
      />
    </DashboardLayout>
  );
};

export default AdminProducts;
