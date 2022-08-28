import React from "react";
import Carousel from "react-material-ui-carousel";
import testimonials from "../../texts/testimonials/testimonials";
import "./Slider.css";

const Dot = () => {
  return <div className="dot"></div>;
};

function Slider(props) {
  const isImage = props.isImage || false;
  return (
    <Carousel
      className="slider-container"
      // IndicatorIcon={Dot()} // Previous Example
      // indicatorIconButtonProps={{
      //   style: {
      //     padding: "3px", // 1
      //     color: "#3D90B2", // 3
      //   },
      // }}
      // activeIndicatorIconButtonProps={{
      //   style: {
      //     backgroundColor: "#fff", // 2
      //   },
      // }}
      // indicatorContainerProps={{
      //   style: {
      //     marginTop: "3rem", // 5
      //     textAlign: "center", // 4
      //   },
      // }}
      // animation="slide"
      // swipe={true}
      // duration={300}
    >
      {testimonials.map((item, i) => (
        <Item key={i} item={item} isImage={isImage} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  let toReturn = null;
  if (!props.isImage) {
    toReturn = (
      <div className="slider-item">
        <h3>{props.item.description}</h3>
      </div>
    );
  } else if (props.isImage) {
    toReturn = (
      <div className="slider-img">
        <img src={props.item.img} alt="" />
      </div>
    );
  }
  return toReturn;
}

export default Slider;
