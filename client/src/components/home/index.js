import React from "react";
import FeaturedSlider from "./FeaturedSlider";
import SlimPromotion from "../utils/SlimPromotion";

const slimPromotion = {
  img: "/images/featured/featured_home_3.jpg",
  lineOne: "Up to 40% off",
  lineTwo: "For second hand guitars",
  lineTitle: "Show now",
  linkTo: "/shop",
};
const Home = () => {
  return (
    <>
      <FeaturedSlider />
      <SlimPromotion items={slimPromotion} />
    </>
  );
};

export default Home;
