import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  isAuthUser,
  signInUser,
  userSignOut,
} from "./store/actions/user.actions";

import Loader from "./components/utils/Loader";

import MainLayout from "./hoc/MainLayout";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Home from "./components/home";
import RegisterLogin from "./components/authUsers/RegisterLogin";

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
          <Header users={users} signOutUser={signOutUser} />
          <MainLayout>
            <Switch>
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
