import React from "react";
import Card from "./Card";

const CardBlock = ({ items, title, shop, grid }) => {
  const renderCards = () =>
    items
      ? items.map((item) => <Card key={item._id} item={item} grid={grid} />)
      : null;
  return (
    <div className={shop ? "card_block_shop" : "card_block"}>
      <div className={shop ? "" : "container"}>
        {title ? <div className="title">{title}</div> : null}
        <div className="flex">{renderCards()}</div>
      </div>
    </div>
  );
};

export default CardBlock;
