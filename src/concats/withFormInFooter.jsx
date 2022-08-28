import React, { useState } from "react";
import Footer from "../components/Footer";

const WithFormInFooter = ({ Component, handleModal }) => {
  return (
    <>
      <Component handleModal={handleModal} />
      <Footer isDesk={true} />
    </>
  );
};

export default WithFormInFooter;
