import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const links = [
  {
    name: "My account",
    linkTo: "/dashboard",
  },
  {
    name: "User Information",
    linkTo: "/dashboard/user/user_info",
  },
  {
    name: "My Cart",
    linkTo: "/dashboard/user/user_cart",
  },
];

export const adminLinks = [
  {
    name: "Products",
    linkTo: "/dashboard/admin/admin_products",
  },
  {
    name: "Manage site",
    linkTo: "/dashboard/admin/manage_site",
  },
];

const DashboardLayout = (props) => {
  const users = useSelector((state) => state.users);

  const renderLinks = (data) =>
    data.map((link, i) => (
      <Link key={i} to={`${link.linkTo}`}>
        {link.name}
      </Link>
    ));
  return (
    <div className="container">
      <div className="user_container page_container">
        <div className="user_left_nav">
          <h2>My Account</h2>
          <div className="links">{renderLinks(links)}</div>
          {users.data.role === "admin" ? (
            <>
              <h2>Admin</h2>
              <div className="links">{renderLinks(adminLinks)}</div>
            </>
          ) : null}
        </div>
        <div className="user_right">
          <div className="dashboard_title">
            <h1>{props.title}</h1>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
