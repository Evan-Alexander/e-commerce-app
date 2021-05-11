import Slider from "react-slick";
import CustomButton from "./CustomButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const settings = {
    dot: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
  };

  const renderSlides = () =>
    items
      ? items.map((item, i) => (
          <div key={i}>
            <div
              className="featured_image"
              style={{
                background: `url(${item.img})`,
              }}
            >
              <div className="featured_action">
                <div className="tag title">{item.lineOne}</div>
                <div className="tag low_title">{item.lineTwo}</div>
                <CustomButton
                  type="default"
                  title={item.lineTitle}
                  linkTo={item.linkTo}
                  style={{ margin: "10px 0 0 0" }}
                />
              </div>
            </div>
          </div>
        ))
      : null;
  return <Slider {...settings}>{renderSlides()}</Slider>;
};

export default Carousel;
