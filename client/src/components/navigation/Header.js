import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ users, signOutUser }) => {
  return (
    <header className="bck_b_light">
      <div className="header-container">
        <div className="left">
          <div className="logo">WAVES</div>
        </div>
        <div className="right">
          <div className="top">
            {users.auth ? (
              <>
                <div className="cart_link">
                  <span>0</span>
                  <Link to="dashboard/user/user_cart">My Cart</Link>
                </div>
                <Link to="/dashboard">My account</Link>
                <span onClick={() => signOutUser()}>Log out</span>
              </>
            ) : (
              <Link to="/sign_in">Log in</Link>
            )}
          </div>
          <div className="bottom">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Shop</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
