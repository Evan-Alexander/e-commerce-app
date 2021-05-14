import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/utils/Loader";

export default function routeGuard(ComposedComponent) {
  const AuthenticationCheck = (props) => {
    const users = useSelector((state) => state.users);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
      if (!users.auth) {
        props.history.push("/");
      } else {
        setIsAuth(true);
      }
    }, [users, props]);

    if (!isAuth) return <Loader full={true} />;
    else return <ComposedComponent users={users} {...props} />;
  };
  return AuthenticationCheck;
}
