import React, { useEffect } from "react";
import "./productTemplate.css";
import TitleWrapper from "../common/TitleWrapper";
import NormalTextWrapper from "../common/NormalTextWrapper";
import Header from "../header";
import SubmitForm from "../SubmitForm";
import Footer from "../Footer";
import NDividers from "../common/NDivider";
import ContactUs from "./contactUs";
import ImageSlider from "./ImageSlider";
import CustomerTestimonials from "../CustomerTestimonials";
import scrollHandler from "../../utils/scrollHandler";
import { useLocation } from "react-router-dom";

const ProductTemplate = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.indexOf("#") == -1) {
      scrollHandler();
    }
  }, [location]);
  return (
    <div className="product-template">
      <Header isMobile={!props.isDesk} handleModal={props.handleModal} />
      <div className="product__billboard"></div>
      <NDividers num={1} />
      {!props.isDesk ? (
        product_text(props)
      ) : (
        <>
          <div className="desk-wrapper">
            <div className="desk-wrapper__right">{product_text(props)}</div>
            <div className="desk-wrapper__left">{product_images(props)}</div>
          </div>
        </>
      )}
      <NDividers num={1} />
      <ContactUs isDesk={props.isDesk} />
      {!props.isDesk ? product_images(props) : null}
      {CustomerTestimonials(!props.isDesk, true)}
      {!props.isDesk ? <SubmitForm /> : null}
      <Footer isDesk={props.isDesk} />
    </div>
  );
};

export default ProductTemplate;
function product_images(props) {
  return (
    <div>
      <TitleWrapper title="تصاویر" TitleClassName="to-center" />
      <ImageSlider images={props.images} />
    </div>
  );
}

function product_text(props) {
  return (
    <div>
      <TitleWrapper title={props.product_name} />
      <NormalTextWrapper>{props.description}</NormalTextWrapper>

      <TitleWrapper title="نصب" />
      <NormalTextWrapper>{props.installation}</NormalTextWrapper>

      <TitleWrapper title="تعمیر" />
      <NormalTextWrapper>{props.repair}</NormalTextWrapper>
    </div>
  );
}
