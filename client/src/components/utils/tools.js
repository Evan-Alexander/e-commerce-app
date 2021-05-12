import { toast } from "react-toastify";

export const renderCardImage = (image) => {
  if (image.length > 0) {
    return image[0];
  } else {
    return `/images/image_not_availble.png`;
  }
};

export const showToast = (type, msg) => {
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position: toast.POSITION_RIGHT,
      });
      break;
    case "ERROR":
      toast.error(msg, {
        position: toast.POSITION_RIGHT,
      });
      break;
    default:
      return false;
  }
};

export const errorHelper = (formik, value) => ({
  error: formik.errors[value] && formik.touched[value] ? true : false,
  helperText:
    formik.errors[value] && formik.touched[value] ? formik.errors[value] : null,
});
