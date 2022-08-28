import React from "react";
import Footer from "../components/Footer";
import SubmitForm from "../components/SubmitForm";

const WithFooterAndForm = ({ Component, handleModal }) => {
  return (
    <>
      <Component handleModal={handleModal} />
      <Footer />
    </>
  );
};

export default WithFooterAndForm;
