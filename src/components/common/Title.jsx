import React, { useState } from "react";
import "./Title.css";

const Title = ({ title, className = "", isMobile, isWhite }) => {
  return (
    <h2
      className={
        !isMobile
          ? `title__title title__title__blue ${className}`
          : `title__title__blue ${className}`
      }
    >
      {title}
    </h2>
  );
};

export default Title;
