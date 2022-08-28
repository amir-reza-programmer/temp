import { border } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./ImageSlider.css";

const Dot = () => {
  return <div className="dot"></div>;
};

function ImageSlider(props) {
  return (
    <Carousel
      className="image-slider-container"
      IndicatorIcon={Dot()} // Previous Example
      indicatorIconButtonProps={{
        style: {
          margin: "1rem", // 1
          padding: "1px",
          color: "#3D90B2", // 3
          marginTop: "-5rem"
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          border: "3px solid #3D90B2"
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "3rem", // 5
          textAlign: "center", // 4
        },
      }}
      animation="slide"
      swipe={true}
      duration={300}>
      {props.images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="slider-img">
      <div style = {{
        height:"20rem",
        // border:"1px solid black"
      }}>
      <img style={{
        height : "90%"
      }} src={props.item} alt="" />
      </div>
    </div>
  );
}

export default ImageSlider;
