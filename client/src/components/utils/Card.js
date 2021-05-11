import React from "react";
import { renderCardImage } from "./tools";
import CustomButton from "./CustomButton";

const Card = (props) => {
  const handleAddToCart = () => {
    alert("add to cart");
  };
  return (
    <div className={`card_item_wrapper ${props.grid ? "grid_bars" : ""}`}>
      <div
        className="image"
        style={{ background: `url(${renderCardImage(props.item.images)})` }}
      ></div>
      <div className="actions_container">
        <div className="tags">
          <div className="brand">{props.item.brand.name}</div>
          <div className="name">{props.item.model}</div>
          <div className="name">${props.item.price}</div>
        </div>
        {props.grid ? (
          <div className="description">
            <p>{props.item.description}</p>
          </div>
        ) : null}
        <div className="actions">
          <div className="button_wrap">
            <CustomButton
              type="default"
              altClass="card_link"
              title="View product"
              linkTo={`/product_detail/${props.item._id}`}
              style={{ fontWeight: "bold" }}
            />
          </div>
          <div className="button_wrap">
            <CustomButton
              type="bag_link"
              runAction={() => handleAddToCart(props.item)}
              iconSize="17"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
