import React from "react";
import { Link } from "react-router-dom";

const CustomButton = (props) => {
  let template = "";
  switch (props.type) {
    case "default":
      template = (
        <Link
          style={{ ...props.style }}
          to={props.linkTo}
          className={!props.altClass ? "link_default" : props.altClass}
        >
          {props.title}
        </Link>
      );
      break;
    default:
      template = "";
  }
  return template;
};

export default CustomButton;
