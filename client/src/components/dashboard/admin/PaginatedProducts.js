import React, { useEffect, useReducer } from "react";
import DashboardLayout from "../../../hoc/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { paginatedProducts } from "../../../store/actions/product.actions";
import ProductTable from "./ProductTable";

const defaultValues = {
  keywords: "",
  brand: [],
  min: 0,
  max: 5000,
  frets: [],
  page: 1,
};

const AdminProducts = (props) => {
  const dispatch = useDispatch();
  const noticifations = useSelector((state) => state.noticifations);
  const products = useSelector((state) => state.products);

  const [searchValues, setSearchValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultValues
  );

  const goToPage = (page) => {
    setSearchValues({ page });
  };

  const goToEditPg = (id) => {
    props.history.push(`/dashboard/admin/edit_product/${id}`);
  };

  useEffect(() => {
    dispatch(paginatedProducts(searchValues));
  }, [dispatch, searchValues]);

  return (
    <DashboardLayout title="Products">
      <div className="products_table">search</div>
      <hr />
      <ProductTable
        products={products.paginatedProducts}
        previous={(page) => goToPage(page)}
        next={(page) => goToPage(page)}
        goToEditPg={(page) => goToEditPg(page)}
      />
    </DashboardLayout>
  );
};

export default AdminProducts;
