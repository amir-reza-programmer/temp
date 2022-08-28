import React, { useState } from "react";
import Form from "./Form";
import Divider from "./common/Divider";

const SubmitForm = ({isInFooter}) => {
  return (
    <div id="contact-us-id">
      <Divider />
      <Form title="دیدگاه شما" isInFooter={isInFooter}/>
      <Divider />
    </div>
  );
};

export default SubmitForm;
