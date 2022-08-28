import React from "react";
import styles from "./product.module.css";
import ImgContainer from "./ImgContainer";
import { Link } from "react-router-dom";

const Product = ({ title, img, className, name, isMobile }) => {
  return (
    <div className={className}>
      <Link to={`/products/${name}`}>
        <ImgContainer
          className={
            isMobile ? styles.image_container : styles.image_container_desk
          }
        >
          <img className={styles.image_item} src={img} alt={title} />
        </ImgContainer>
      </Link>
      <div className={styles.title_container}>
        <Link className={styles.title} to={`/products/${name}`}>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Product;
