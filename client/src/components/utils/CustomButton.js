import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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
    case "bag_link":
      template = (
        <div
          className="bag_link"
          onClick={() => {
            props.runAction();
          }}
          style={{ ...props.style }}
        >
          <AddShoppingCartIcon style={{ fontSize: props.iconSize }} />
        </div>
      );
      break;
    default:
      template = "";
  }
  return template;
};

export default CustomButton;
