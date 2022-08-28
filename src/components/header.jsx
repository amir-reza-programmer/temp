import React, { useState } from "react";
import styles from "./header.module.css";
import WhiteLogo from "../pics/WhiteLogo.png";
import BlueLogo from "../pics/BlueLogo.png";
import Navbar from "./Navbar";
import Badge from "./common/Badge";
import { useNavigate, Link } from "react-router-dom";
import "./animation.css";

const Header = ({ isMobile, handleModal }) => {
  const mountedStyle = {
    animation: "inAnimation 8000ms ease-in",
    animationFillMode: "forwards",
  };
  const navigate = useNavigate();
  const logoAndName = (isMobile) => (
    <>
      {isMobile ? (
        <>
          <Link className={styles.remove_decoration_anchor} to="/home">
            <div className={styles.header__name}>دلتاسیستم</div>
          </Link>
          <Link className={styles.header__logo} to="/home">
            <img className={styles.header__img} src={WhiteLogo} alt="logo" />
          </Link>
        </>
      ) : (
        <div className={styles.header__logo_name_desk}>
          <Link className={styles.remove_decoration_anchor_desk} to="/home">
            <div className={styles.header__name_desk}>دلتاسیستم</div>
          </Link>
          <Link to="/home" className={styles.header__logo_desk}>
            <img
              className={styles.header__img_desk}
              src={BlueLogo}
              alt="logo"
            />
          </Link>
        </div>
      )}
    </>
  );

  return (
    <header
      id="app-header"
      className={isMobile ? styles.header : styles.header_desk}
      style={{ animation: "inAnimation 300ms ease-in" }}
    >
      <div
        className={isMobile ? styles.header__title : ""}
        style={{ mountedStyle }}
      >
        {logoAndName(isMobile)}
      </div>
      {isMobile ? (
        <div className={styles.header__nav}>
          <Navbar isMobile={true} />
        </div>
      ) : (
        <div className={styles.header__nav_desk}>
          <Navbar isMobile={false} />
        </div>
      )}
      {!isMobile ? (
        <Badge
          title="phone"
          text="چجوری می‌تونم کمکت کنم؟"
          isMobile={isMobile}
          handleModal={handleModal}
        />
      ) : null}
    </header>
  );
};
export default Header;
