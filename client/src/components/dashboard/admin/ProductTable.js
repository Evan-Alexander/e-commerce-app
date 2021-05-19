import React from "react";
import { Table, Pagination, Modal, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Moment from "react-moment";
import Loader from "../../utils/Loader";
import DashboardLayout from "../../../hoc/DashboardLayout";

const ProductTable = ({ products, previous, next, goToEditPg }) => {
  const goToPrevPage = (page) => {
    previous(page);
  };
  const goToNextPage = (page) => {
    next(page);
  };

  return (
    <>
      {products && products.docs ? (
        <>
          <Table striped bordered hover className="products_table">
            <thead>
              <tr>
                <th>Created</th>
                <th>Model</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              {products.docs.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Moment to={item.date}></Moment>
                  </td>
                  <td>{item.model}</td>
                  <td>{item.available}</td>
                  <td
                    className="action_btn edit_btn"
                    onClick={() => goToEditPg(item._id)}
                  >
                    Edit
                  </td>

                  <td
                    className="action_btn remove_btn"
                    onClick={() => alert("Remove")}
                  >
                    Remove
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {products.hasPrevPage ? (
              <>
                <Pagination.Prev
                  onClick={() => goToPrevPage(products.prevPage)}
                />
                <Pagination.Item
                  onClick={() => goToPrevPage(products.prevPage)}
                >
                  {products.prevPage}
                </Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{products.page}</Pagination.Item>
            {products.hasNextPage ? (
              <>
                <Pagination.Item
                  onClick={() => goToNextPage(products.nextPage)}
                >
                  {products.nextPage}
                </Pagination.Item>
                <Pagination.Next
                  onClick={() => goToNextPage(products.nextPage)}
                />
              </>
            ) : null}
          </Pagination>
          <LinkContainer to="/dashboard/admin/add_products">
            <Button variant="secondary">Add product</Button>
          </LinkContainer>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductTable;
