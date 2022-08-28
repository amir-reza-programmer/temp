import React from "react";
import Footer from "../components/Footer";

const WithFooter = ({ Component }) => {
  return (
    <>
      <Component />
      <Footer />
    </>
  );
};

export default WithFooter;
