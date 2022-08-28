import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ children, handleClick, className, disabled }) => {


  const classes = [
    styles.button,
    className,
    disabled ? styles.disabled : null,
  ].join(" ");

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
