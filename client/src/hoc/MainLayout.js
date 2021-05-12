import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { showToast } from "../components/utils/tools";
import { clearNotification } from "../store/actions";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = (props) => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notifications && notifications.error) {
      const msg = notifications.msg ? notifications.msg : "Error";
      showToast("ERROR", msg);
      dispatch(clearNotification());
    }
    if (notifications && notifications.success) {
      const msg = notifications.msg ? notifications.msg : "Success!";
      showToast("SUCCESS", msg);
      dispatch(clearNotification());
    }
  }, [notifications, dispatch]);

  return (
    <div>
      {props.children}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
