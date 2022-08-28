import Divider from "./common/Divider";
import Title from "./common/Title";
import NDividers from "./common/NDivider";
import Slider from "react-slick";
import MySlider from "./common/Slider";
import testimonials from "../texts/testimonials/testimonials";
import Button from "./common/Button";

import "./CustomerTestimonials.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const settings2 = {
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const settings3 = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
};
const CustomerTestimonials = (isMobile, isWhite = false) => {
  return (
    <>
      {isMobile ? (
        <>
          <Divider />
          <section
            style={{
              backgroundColor: "#3D90B2",
            }}
          >
            <Title
              isMobile={isMobile}
              className="testimonials__title"
              title="برخی نظرات مشتریان"
            />
            <Slider {...settings3} className="testimonials__slider">
              {testimonials.map((testimonial, index) => {
                return (
                  <div
                    key={index}
                    className="testimonials__slider slider-container"
                  >
                    <p className="slider-item">{testimonial.description}</p>
                  </div>
                );
              })}
            </Slider>
            <div className="testimonials__new-testimonial-button">
              <a href="https://wa.me/989121989135">
                <Button className="home__button">{"ثبت نظر جدید"}</Button>
              </a>
            </div>
          </section>
          <NDividers num={2} />
        </>
      ) : !isWhite ? (
        <>
          <Divider />
          <section className="testimonials__wrapper background-blue p-3">
            <Title
              isMobile={isMobile}
              className="to-right testimonials__title font-high p-r-3"
              title="برخی نظرات مشتریان"
            />
            <div
              className="testimonials__testimonial_wrapper_desk"
              style={{ width: "90vw" }}
            >
              <Slider {...settings2}>
                {testimonials.map((testimonial) => {
                  return (
                    <div className="testimonials__testimonial_desk">
                      <p className="testimonials__testimonial_desk_description">
                        {testimonial.description}
                      </p>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="testimonials__new-testimonial-button">
              <a href="https://wa.me/989121989135">
                <Button className="home__button">{"ثبت نظر جدید"}</Button>
              </a>
            </div>
          </section>
        </>
      ) : (
        <>
          <Divider />
          <section className="testimonials__wrapper background-white p-3">
            <Title
              isMobile={isMobile}
              className="to-right testimonials__title_white font-high p-r-3"
              title="برخی نظرات مشتریان"
            />
            <div className="testimonials__testimonial_wrapper_desk">
              <Slider {...settings2}>
                {testimonials.map((testimonial) => {
                  return (
                    <div className="testimonials__testimonial_desk_white">
                      <p className="testimonials__testimonial_desk_description_white">
                        {testimonial.description}
                      </p>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="testimonials__new-testimonial-button">
              <a href="https://wa.me/989121989135">
                <Button className="home__button">{"ثبت نظر جدید"}</Button>
              </a>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CustomerTestimonials;
