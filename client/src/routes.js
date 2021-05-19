import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { isAuthUser, userSignOut } from "./store/actions/user.actions";
import RouteGuard from "./hoc/RouteGuard";
import Loader from "./components/utils/Loader";
import MainLayout from "./hoc/MainLayout";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Home from "./components/home";
import RegisterLogin from "./components/authUsers/RegisterLogin";

import UserDashboard from "./components/dashboard";
import UserInfo from "./components/dashboard/user/UserInfo";
import AdminProducts from "./components/dashboard/admin/PaginatedProducts";

function App(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const signOutUser = () => {
    dispatch(userSignOut());
  };

  useEffect(() => {
    dispatch(isAuthUser());
  }, [dispatch]);

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader full={true} />
      ) : (
        <>
          <Header users={users} userSignOut={userSignOut} />
          <MainLayout>
            <Switch>
              <Route
                path="/dashboard/admin/admin_products"
                component={RouteGuard(AdminProducts)}
              />
              <Route
                path="/dashboard/user/user_info"
                component={RouteGuard(UserInfo)}
              />
              <Route path="/dashboard" component={RouteGuard(UserDashboard)} />
              <Route path="/sign_in" component={RegisterLogin} />
              <Route path="/" component={Home} />
            </Switch>
          </MainLayout>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
