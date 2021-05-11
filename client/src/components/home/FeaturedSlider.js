import React from "react";
import Carousel from "../../components/utils/Carousel";
import "./featured-slider.css";

const FeaturedSlider = () => {
  const sliderImages = [
    {
      img: "/images/featured/featured_home.jpg",
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      lineTitle: "Show now",
      linkTo: "/shop",
    },
    {
      img: "/images/featured/featured_home_2.jpg",
      lineOne: "B-Stock",
      lineTwo: "Awesome Discounts",
      lineTitle: "View Offers",
      linkTo: "/shop",
    },
  ];
  return (
    <div className="featured_container">
      <Carousel items={sliderImages} />
    </div>
  );
};

export default FeaturedSlider;
