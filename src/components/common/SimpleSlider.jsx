import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(248, 248, 248)" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div style={{ width: "80vw", height: "500px" }}>
        <div className="container">
          <Slider {...settings}>
            <div>
              1
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              2
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              3
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              4
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              5
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              6
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              7
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
