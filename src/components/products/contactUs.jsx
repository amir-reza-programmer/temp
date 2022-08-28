import React, { useState, useRef } from "react";
import NormalTextWrapper from "../common/NormalTextWrapper";
import FontAwesome from "react-fontawesome";
import { useNavigate } from "react-router-dom";

import "./contactUs.css";

const ContactUs = (props) => {
  const a_ref = useRef(null);
  const navigate = useNavigate();
  const nextPath = () => {
    a_ref.current.click();
  };

  return (
    <div className="contact-us">
      <a className="dummy-a" href="#contact-us-id" ref={a_ref}></a>
      <div
        className={props.isDesk ? "contact-us-text-desk" : "contact-us-text"}
      >
        <NormalTextWrapper className="white-font align_center">
          جهت مشاوره و نصب با ما تماس بگیرید.
        </NormalTextWrapper>
        <a style={{ textDecoration: "none" }} href="#contact-us-id" ref={a_ref}>
          <button
            className={`contact-us-button flex-container ${
              !props.isDesk ? "margin-auto" : ""
            }`}
            onClick={() => nextPath()}
          >
            <p className="flex-item">ارتباط با ما</p>
            <FontAwesome className="flex-item" name="angle-left" size="2x" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
