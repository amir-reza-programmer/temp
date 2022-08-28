// add react
import React, { useState, useEffect } from "react";
import WhiteLogo from "../pics/WhiteLogo.png";
import Divider from "./common/Divider";
import Header from "./header";
import "./Home.css";
import Button from "./common/Button";
import FontAwesome from "react-fontawesome";
import Title from "./common/Title";
import products from "../texts/products/products";
import Product from "./common/product";
import customers from "../texts/customers/customers";
import NDividers from "./common/NDivider";
import CustomerTestimonials from "./CustomerTestimonials";
import { useNavigate } from "react-router-dom";
import scrollHandler from "../utils/scrollHandler";
import { useLocation } from "react-router-dom";

const SomeCustomers = (isMobile) => {
  return (
    <section className={isMobile ? "" : "sec-desk"}>
      <Divider />

      <Title
        title="برخی مشتریان ما"
        className={isMobile ? "" : "to-right font-high"}
      />

      <div
        className={
          isMobile
            ? "customers__items__wrapper"
            : "customers__items__wrapper_desk"
        }
      >
        {customers.map((item, i) => (
          <div
            className={isMobile ? "customers__item" : "customers__item_desk"}
            key={i}
          >
            <a href={item.url}>
              <img src={item.img} alt={""} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductsSection = (isMobile) => {
  return (
    <section className={isMobile ? "" : "sec-desk"}>
      <Title title="محصولات" className={isMobile ? "" : "to-right font-high"} />
      <div className="products__wrapper">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            img={product.img}
            name={product.name}
            className={isMobile ? "products__item" : "products__item_desk"}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

const DeskHomeBillBoard = (navigate) => {
  return (
    <>
      <div className="home__billboard-desk">
        <NDividers num={2} />
        <div className="home__billboard__title-desk">
          <h1>مشاور و مجری انواع سیستم‌های حفاظتی</h1>
        </div>
      </div>
    </>
  );
};

const Home = ({ handleModal }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  const [clickCount, setClickCount] = useState(0);
  const location = useLocation();

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (clickCount >= 1) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [clickCount]);

  useEffect(() => {
    if (location.pathname.indexOf("#") === -1) {
      scrollHandler();
    }
  }, [location]);

  const isMobile = width <= 768;

  const [displayHeader, setDisplay] = useState(false);
  const changeNavbarDisplay = () => {
    if (clickCount <= 1) {
      let newClickCount = clickCount + 1;
      setClickCount(newClickCount);
    }
  };

  if (isMobile) {
    window.addEventListener("click", changeNavbarDisplay);
  }
  if (isMobile) {
    window.addEventListener("scroll", changeNavbarDisplay);
  }

  const ButtonChildren = (
    <div className="home__inButton">
      <p
        style={{ fontFamily: "peyda" }}
        className="home__subtext home__flex_item"
      >
        {"آشنایی با ما"}
      </p>
      <div className="home__flex_item">
        <FontAwesome name="angle-left" size="2x" style={{ color: "#fff" }} />
      </div>
    </div>
  );

  const AboutUs = (
    <Button className="home__button" handleClick={() => navigate("/about")}>
      {ButtonChildren}
    </Button>
  );
  const HomeBillBoard = (
    <>
      {isMobile ? (
        <div
          className="home__bg_img"
          style={
            displayHeader
              ? {
                  animation: "imageInAnimation 300ms ease-in",
                }
              : { animation: "none" }
          }
        >
          {" "}
        </div>
      ) : null}
      <div className={isMobile ? `home__wrapper` : ""}>
        {!displayHeader ? (
          <div className="home__logo-title-wrapper">
            <div className="home__title">
              <p className="home__text">دلتاسیستم</p>
            </div>
            <div className="home__logo">
              <img src={WhiteLogo} alt="logo" />
            </div>
          </div>
        ) : (
          <NDividers num={2} />
        )}
        <div
          className="home__subtitle"
          style={
            displayHeader
              ? {
                  animation: "inAnimation 300ms ease-in",
                }
              : { animation: "none" }
          }
        >
          <p className={!displayHeader ? "home__subtext" : "home__text"}>
            مشاور و مجری انواع سیستم‌های حفاظتی
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {isMobile && displayHeader ? <Header isMobile={true} /> : null}
      {!isMobile ? <Header isMobile={false} handleModal={handleModal} /> : null}
      {isMobile ? HomeBillBoard : DeskHomeBillBoard(navigate)}

      {AboutUs}

      {ProductsSection(isMobile)}
      {CustomerTestimonials(isMobile)}
      {SomeCustomers(isMobile)}
    </>
  );
};

export default Home;
