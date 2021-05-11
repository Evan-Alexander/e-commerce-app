import React, { useEffect } from "react";
import FeaturedSlider from "./FeaturedSlider";
import SlimPromotion from "../utils/SlimPromotion";
import CardBlock from "../utils/CardBlock";
import { useDispatch, useSelector } from "react-redux";
import { productsBySort } from "../../store/actions/product.actions";
import Carousel from "../utils/Carousel";

const slimPromotion = {
  img: "/images/featured/featured_home_3.jpg",
  lineOne: "Up to 40% off",
  lineTwo: "For second hand guitars",
  lineTitle: "Show now",
  linkTo: "/shop",
};
const Home = () => {
  const dispatch = useDispatch();
  const { byAmountSold, byDate } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(
      productsBySort({
        limit: 4,
        sortBy: "itemSold",
        order: "desc",
        where: "byAmountSold",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      productsBySort({
        limit: 4,
        sortBy: "date",
        order: "desc",
        where: "byDate",
      })
    );
  }, [dispatch]);

  return (
    <>
      <FeaturedSlider />
      {byAmountSold ? (
        <CardBlock title="Best Selling Guitars" items={byAmountSold} />
      ) : null}
      <SlimPromotion items={slimPromotion} />
    </>
  );
};

export default Home;
