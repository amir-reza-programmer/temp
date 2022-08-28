import React, { useState } from "react";
import styles from "./Customers.module.css";
import customers from "../texts/customers/customers";
import ImgContainer from "./common/ImgContainer";

const Customers = () => {
  return (
    <>
      <h2 className={styles.title}>مشتریان</h2>
      <div className={styles.container}>
        {customers.map((customer, index) => {
          return Customer(index, customer);
        })}
      </div>
    </>
  );
};

export default Customers;
function Customer(index, customer) {
  return (
    <div className={styles.customer} key={index}>
      <ImgContainer className={styles.customer_img}>
        <img className={styles.img} src={customer.img} alt="customer" />
      </ImgContainer>
    </div>
  );
}
