import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Icon from "./icons/icon";
import products from "../texts/products/products";
import SubmitForm from "./SubmitForm";

const GoldScan = (
  <div className="footer-powered-by">
    <span>powered by</span>
    <a href="https://goldscanco.com">
      <img
        // style={{ width: "40px" }}
        src="https://goldscanco.com/static/media/white-logo.d14b8b7d7671046bec71.png"
        alt="gold scan logo"
      />
    </a>
  </div>
);

const Footer = ({ isDesk }) => {
  return (
    <>
      <div className={isDesk ? "footer-desk" : ""}>
        <div className="footer footer-desk-text">
          <div className="footer-logo-title-wrapper">
            <div className="footer-title">
              <p>دلتا سیستم</p>
            </div>
            <div className="footer-logo">
              <img src="/images/WhiteLogo.png" alt="logo" />
            </div>
          </div>
          <div className={isDesk ? "middle-wrapper-desk" : "middle-wrapper"}>
            {isDesk ? (
              <React.Fragment>
                <div className="footer-major-links">
                  <Link to="/home">
                    <div>خانه</div>
                  </Link>
                  <Link to="/about">
                    <div>آشنایی با ما</div>
                  </Link>
                </div>
                <div className="footer-products-links">
                  <div className="footer-products-links__title">محصولات</div>
                  <div className="footer-products-links__wrapper">
                    {products.map((product, index) => (
                      <Link to={`/products/${product.name}`} key={index}>
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ) : null}

            <div className="footer-about-office">
              <div id="contact-us-id" className="footer-about-office__title">
                {isDesk ? "ارتباط با ما" : null}{" "}
              </div>
              <div className="footer-about-office__wrapper">
                <div className="footer-address">
                  <p>
                    تهران، بلوار آفریقا، نرسیده به ظفر، خیابان یزدان پناه، کوی
                    دبیر، پلاک ۴، واحد ۶
                  </p>
                </div>
                <div className="footer-phone">
                  <p>واحد سفارش ها</p>
                  <p
                    onClick={(e) => {
                      console.log(e);
                      //
                      // console.log(e.target.innerHTML);
                      // console.log(e.detail);
                      switch (e.detail) {
                        case 1: {
                          console.log("single click");
                          break;
                        }
                        case 2: {
                          navigator.clipboard.writeText(e.target.innerHTML);
                          console.log("double click");
                          break;
                        }
                        default: {
                          console.log("other");
                        }
                      }
                    }}
                  >
                    ۰۹۱۲۱۹۸۹۱۳۵
                  </p>
                  <p>۰۲۱-۸۸۵۰۵۱۴۶ (خط ویژه)</p>
                </div>
                {!isDesk ? (
                  <div className="footer-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3239.296051424005!2d51.4304313659668!3d35.718936920166016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01602adced0b%3A0xdc218f5f679ae8e8!2sTehran%20Province%2C%20Tehran%2C%20District%207%2C%20Martyr%20Soleyman%20Khater%20St!5e0!3m2!1sen!2s!4v1661016835776!5m2!1sen!2s"
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                ) : null}
                <div className={isDesk ? "footer-icons-desk" : "footer-icons"}>
                  <a href="https://www.instagram.com/invites/contact/?i=1lfwl1qwkyu1a&utm_content=133whq5">
                    <Icon title="instagram" />
                  </a>
                  <a href="/">
                    <Icon title="telegram" />
                  </a>
                  <a href="https://wa.me/+989121989135">
                    <Icon title="whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {GoldScan}
        </div>
        {/* {isDesk ? (
          <>
            <div className="footer-form">
              <SubmitForm isInFooter={isDesk} />
            </div>
            {GoldScan}
          </>
        ) : null} */}
      </div>
    </>
  );
};

export default Footer;

/*

تهران، بلوار آفریقا، نرسیده به ظفر، خیابان یزدان پناه، کوی دبیر، پلاک ۴، واحد ۶
واحد سفارش‌ها:
۰۹۱۲۱۹۸۹۱۳۵
۰۲۱-۸۸۸۲۴۱۸۰
۰۲۱-۸۸۵۰۵۱۴۶ (خط ویژه)
*/
