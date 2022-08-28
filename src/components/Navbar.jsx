import React, { useRef } from "react";
import "./Navbar.css";
import useCollapse from "react-collapsed";
import MenuButton from "../pics/MenuButton.png";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import WhiteLogo from "../pics/WhiteLogo.png";

import InnerNavbar from "./InnerNavbar";
const Navbar = ({ isMobile }) => {
  const myRef = useRef(null);

  const toggleNavbar = () => {
    // console.log("before click main nav");
    myRef.current && myRef.current.click();
    // console.log("after click main nav");
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <>
      {isExpanded && (
        <div className="modal" ref={myRef} {...getToggleProps()}></div>
      )}

      {isMobile ? (
        <nav className="navbar">
          <div className="nav-wrapper">
            <div className="header" {...getToggleProps()}>
              <img className="header-img" src={MenuButton} alt="menu" />
            </div>

            <div {...getCollapseProps()}>
              <ul className="mobile-navbar right content font-white bg-blue content-bold">
                <Link className="navbar-item" to="/">
                  <li className="li-navbar" onClick={toggleNavbar}>
                    خانه
                  </li>
                </Link>
                <Link className="navbar-item" to="/about">
                  <li className="li-navbar" onClick={toggleNavbar}>
                    درباره‌ما
                  </li>
                </Link>
                <div className="navbar-item" to="#">
                  <InnerNavbar isMobile={true} handleClick={toggleNavbar} />
                </div>
                <a className="navbar-item" href="#contact-us-id">
                  <li className="li-navbar" onClick={toggleNavbar}>
                    ارتباط با ما
                  </li>
                </a>
              </ul>
              <div>
                <div className={styles.header__name}>دلتاسیستم</div>

                <img
                  className={styles.header__img}
                  src={WhiteLogo}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav>
          <ul className="desk-navbar content font-blue content-bold ul-navbar">
            <Link className="navbar-item-desk" to="/">
              <li className="li-navbar-desk" onClick={toggleNavbar}>
                خانه
              </li>
            </Link>
            <Link className="navbar-item-desk" to="/about">
              <li className="li-navbar-desk" onClick={toggleNavbar}>
                درباره‌ما
              </li>
            </Link>
            <div
              className="pointer navbar-item-desk main-nav-to-inner-nav-desk"
              to="#"
            >
              <InnerNavbar isMobile={false} handleClick={toggleNavbar} />
            </div>
            <a className="navbar-item-desk" href="#contact-us-id">
              <li className="li-navbar-desk" onClick={toggleNavbar}>
                ارتباط با ما
              </li>
            </a>
          </ul>
        </nav>
      )}
    </>
  );
};
export default Navbar;
