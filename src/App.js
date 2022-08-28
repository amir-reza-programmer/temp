import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Customers from "./components/Customers";
import Slider from "./components/common/Slider";
import Footer from "./components/Footer"
import Form from "./components/Form";
import Badge from './components/common/Badge';
import WithFooterAndForm from "./concats/withFooterAndForm";
import WithHeaderAndFooterAndForm from "./concats/withHeaderAndFooterAndForm";
import ProductTemplate from './components/products/productTemplate';
import roller_info from "./texts/products/product_page/roller";
import door_info from "./texts/products/product_page/door";
import doorPhone_info from "./texts/products/product_page/doorPhone";
import gate_info from "./texts/products/product_page/gate";
import control_info from "./texts/products/product_page/control";
import antenna_info from "./texts/products/product_page/antenna";
import cctv_info from "./texts/products/product_page/cctv";
import security_info from "./texts/products/product_page/security";
import fireAlarm_info from "./texts/products/product_page/fireAlarm";
import POS_info from "./texts/products/product_page/POS";
import communication_info from "./texts/products/product_page/communication";
import WithFormInFooter from "./concats/withFormInFooter";

import React, { useState, useEffect } from 'react';
import CallUsModal from "./components/common/CallUsModal";


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [displayModal, setDisplayModal] = useState(false);

  const handleModal = () =>{
    let newDisplayModal = displayModal? false: true
    setDisplayModal(newDisplayModal)
  }
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {

    if (!displayModal) {
      
      window.removeEventListener('click', window.fn, false)
    } else {
      setTimeout(() => {
        
window.addEventListener('click', window.fn=function(e) {
    const rect = document.querySelector('.call-us-modal').getBoundingClientRect();
    const clickedInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
    );

    const rect2 = document.querySelector('.badge img').getBoundingClientRect();
    const clickedInButton = (
      rect2.top <= e.clientY &&
        e.clientY <= rect2.top + rect2.height &&
        rect2.left <= e.clientX &&
        e.clientX <= rect2.left + rect2.width
    );
    if (clickedInDialog === false && clickedInButton === false){
          setDisplayModal(false)
    }
      })  
        
      }, 500);
        
    }   
  }, [displayModal]);
  const isMobile = width <= 768;
  const isDesk = !isMobile;
  return (
    <>
      {isMobile ? <Badge title="phone" text="چجوری می‌تونم کمکت کنم؟" isMobile={isMobile} displayModal={displayModal} handleModal={handleModal}/> : null}
      {displayModal ? <CallUsModal isMobile={isMobile} handleModal={handleModal}/> : null}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="home" element={isMobile ? <WithFooterAndForm Component={Home} handleModal={handleModal} /> : <WithFormInFooter Component={Home} handleModal={handleModal} />} />
            <Route path="about" element={<WithHeaderAndFooterAndForm Component={About} isDesk={isDesk}   handleModal={handleModal}/>} />
            <Route path="products">
              <Route path="roller" element={<ProductTemplate isDesk={isDesk} {...roller_info} handleModal={handleModal}/>} />
              <Route path="door" element={<ProductTemplate isDesk={isDesk} {...door_info} handleModal={handleModal}/>} />
              <Route path="doorPhone" element={<ProductTemplate isDesk={isDesk} {...doorPhone_info} handleModal={handleModal}/>} />
              <Route path="gate" element={<ProductTemplate isDesk={isDesk} {...gate_info} handleModal={handleModal}/>} />
              <Route path="control" element={<ProductTemplate isDesk={isDesk} {...control_info} handleModal={handleModal}/>} />
              <Route path="antenna" element={<ProductTemplate isDesk={isDesk} {...antenna_info} handleModal={handleModal}/>} />
              <Route path="cctv" element={<ProductTemplate isDesk={isDesk} {...cctv_info} handleModal={handleModal}/>} />
              <Route path="security" element={<ProductTemplate isDesk={isDesk} {...security_info} handleModal={handleModal}/>} />
              <Route path="fireAlarm" element={<ProductTemplate isDesk={isDesk} {...fireAlarm_info} handleModal={handleModal}/>} />
              <Route path="POS" element={<ProductTemplate isDesk={isDesk} {...POS_info} handleModal={handleModal}/>} />
              <Route path="communication" element={<ProductTemplate isDesk={isDesk} {...communication_info} handleModal={handleModal}/>} />
            </Route>
            <Route path="customers" element={<Customers />} />
            <Route path="testimony" element={<Slider />} />
            <Route path="footer" element={<Footer />} />
            <Route path="form" element={<Form />} />
            <Route path="/" element={<Navigate replace to="home" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

