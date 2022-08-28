import React from "react";
import Product from "./common/product";
import products from "../texts/products/products";
import "./two-col.css";
import "./Products.css"

const Products = () => {
  return (
    <div className="two-col-container">
      {products.map((product, index) => (
        <Product className={"two-col-item product_item"} key={index} {...product} />
      ))}
    </div>
  );
};

export default Products;
