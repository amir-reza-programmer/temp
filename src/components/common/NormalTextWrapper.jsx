import React, { useState } from "react";
import "./NormalTextWrapper.css";

const NormalTextWrapper = ({ children, className = "" }) => {
  return <div className={`normal-text-wrapper ${className}`}>{children}</div>;
};
export default NormalTextWrapper;
