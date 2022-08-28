import React from "react";
import CloseButton from "../../pics/modal/close_button.png";
import WhatsAppLogo from "../../pics/modal/whatsapp.png";
import PhoneLogo from "../../pics/modal/call.png";
import Logo from "../../pics/modal/logo.png";

import "./CallUsModal.css";
const showHideClassName = (isMobile) => {
  if (isMobile) {
    return "call-us-modal call-us-modal-mobile";
  }
  return "call-us-modal";
};
const CallUsModal = (props) => {
  return (
    <div className={showHideClassName(props.isMobile)}>
      <div className="close-button-wrapper">
        <img src={CloseButton} alt="close-button" onClick={props.handleModal} />
      </div>
      <div className="logo-title-wrapper">
        <div className="title">دلتا سیستم</div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <span>ارتباط از طریق</span>
      {!props.isMobile ? (
        <a href="https://wa.me/989121989135">
          <button className="button">
            <img src={WhatsAppLogo} alt="WhatsAppLogo" />
            <span>واتس‌اپ</span>
          </button>
        </a>
      ) : (
        <div className="buttons-wrapper">
          <a href="tel:+989121989135">
            <button className="button">
              <img src={PhoneLogo} alt="PhoneLogo" />
              <span>تماس تلفنی</span>
            </button>
          </a>
          <a href="https://wa.me/989121989135">
            <button className="button">
              <img src={WhatsAppLogo} alt="WhatsAppLogo" />
              <span>واتس‌اپ</span>
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default CallUsModal;
