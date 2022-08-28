import React from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";

import './fonts/Woff/IRANSansXFaNum-Bold.woff'
import './fonts/Woff/IRANSansXFaNum-Regular.woff'
import './fonts/Woff2/IRANSansXFaNum-Regular.woff2'
import './fonts/Woff2/IRANSansXFaNum-Regular.woff2'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

