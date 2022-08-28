import React from "react";
import ContactUs from "../../pics/contact_us.png";
import "./Badge.css";

const Badge = ({ title, text, isMobile, handleModal }) => {
  return (
    <div
      className={`badge badge-green ${!isMobile ? "big-badge" : ""}`}
      onClick={handleModal}
    >
      <img src={ContactUs} alt="ContactUs" />
    </div>
  );
};

export default Badge;
