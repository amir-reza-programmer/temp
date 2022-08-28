import React from "react";
import Footer from "../components/Footer";
import SubmitForm from "../components/SubmitForm";
import Header from "../components/header";
import NDividers from "../components/common/NDivider";

const WithHeaderAndFooterAndForm = ({ Component, isDesk, handleModal }) => {
  return (
    <>
      <Header isMobile={!isDesk} handleModal={handleModal} />
      {isDesk ? <NDividers num={1} /> : null}
      <div className={isDesk ? "sec-desk-padding" : ""}>
        <Component isDesk={isDesk} />
      </div>
      {isDesk ? <NDividers num={1} /> : null}
      {isDesk ? null : <SubmitForm />}
      {isDesk ? <NDividers num={1} /> : null}
      <Footer isDesk={isDesk} />
    </>
  );
};

export default WithHeaderAndFooterAndForm;
