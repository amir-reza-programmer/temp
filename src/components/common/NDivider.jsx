import React, { useState } from "react";
import Divider from "./Divider";

const NDividers = ({ num }) => {
  const dividers = [];
  for (let i = 0; i < num; i++) {
    dividers.push(<Divider key={i} />);
  }
  return dividers;
};

export default NDividers;
