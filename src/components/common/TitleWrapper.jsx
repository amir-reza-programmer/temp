import React, { useState } from "react";
import Title from "./Title";
import "./TitleWrapper.css"

const TitleWrapper = ({ title, TitleClassName="" }) => {
  return (
    <div className="title-wrapper">
      <Title title={title} className={`font-weight-400 to-right ${TitleClassName}`} />
    </div>
  );
};

export default TitleWrapper;
