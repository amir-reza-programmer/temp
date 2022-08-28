import React, { useRef } from "react";
import "./Navbar.css";
import "./InnerNavbar.css";
import useCollapse from "react-collapsed";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import products from "../texts/products/products";

const InnerNavbar = ({ isMobile, handleClick }) => {
  // console.log(handleClick);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const myRef = useRef(null);

  const handleClickInnerNavbar = () => {
    // console.log("before toggle inner navbar");
    myRef.current && myRef.current.click();
    handleClick();
    // console.log("after toggle inner navbar");
  };

  const headerIcon = isExpanded ? (
    <FontAwesome
      name="angle-up"
      size="3x"
      style={{ color: isMobile ? "#fff" : "#3d90a2" }}
    />
  ) : (
    <FontAwesome
      name="angle-down"
      size="3x"
      style={{ color: isMobile ? "#fff" : "#3d90a2" }}
    />
  );
  return (
    <>
      {isExpanded ? (
        <div
          className={!isMobile ? "modal" : ""}
          ref={myRef}
          {...getToggleProps()}
        ></div>
      ) : null}
      {isMobile ? (
        <div className="header inner-header" {...getToggleProps()}>
          <div className="flex-item-inner-header">{"محصولات"}</div>
          <div className="flex-item-inner-header">{headerIcon}</div>
        </div>
      ) : (
        <div className="header inner-header-desk" {...getToggleProps()}>
          <div className="flex-item-inner-header-desk">{"محصولات"}</div>
          <div className="flex-item-inner-header-desk">{headerIcon}</div>
        </div>
      )}
      {isMobile ? (
        <div {...getCollapseProps()}>
          <ul className="inner-mobile-navbar mobile-navbar right content font-white bg-blue content-inner">
            {products.map((product, indx) => (
              <Link
                key={indx}
                className="navbar-item navbar-item-inner"
                to={`/products/${product.name}`}
              >
                <li className="inner-li" onClick={handleClickInnerNavbar}>
                  {product.title}
                </li>
                {/* <li className="inner-li" onClick={handleClickInnerNavbar}>
                  {product.title}
                </li> */}
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div className="inner-navbar-desk-fixed" {...getCollapseProps()}>
            <div className="">
              {products.map((product, index) => (
                <Link
                  key={index}
                  className="navbar-item-desk-inner"
                  to={`/products/${product.name}`}
                >
                  <li
                    className="li-inner-desk"
                    onClick={handleClickInnerNavbar}
                  >
                    {product.title}
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default InnerNavbar;
