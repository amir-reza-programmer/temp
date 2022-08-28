import React, { useState } from "react";
import "./Form.css";
import Title from "./common/Title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.css"
const Form = ({ title, isInFooter }) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (email.length === 0) {
      toast.error("لطفا ایمیل خود را وارد کنید");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error("لطفا ایمیل خود را به درستی وارد کنید");
    } else if (text === "") {
      toast.error("لطفا متن خود را وارد کنید");
    } else {
      toast.success("پیام شما با موفقیت ارسال شد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="form__wrapper">
        <div className="form__title">
          <Title title={title} className={isInFooter ? "white-font" : ""} />
          <form className="form__form">
            <div className="form__input__wrapper">
              <input
                className= {`${!email ? "form__input" : "form__input ltr"} ${isInFooter ? "blue__form__input" : ""}`}
                onChange={handleEmailChange}
                type="email"
                placeholder="ایمیل"
                required
              />
            </div>
            <textarea
              onChange={(event) => setText(event.target.value)}
              className= {`form__textarea ${isInFooter ? "blue__form__input" : ""}`}
              placeholder="متن نامه"
              required></textarea>
            <div className="form__submit__wrapper">
              <button
                className={`form__button ${isInFooter ? "blue__form__input" : ""}`}
                type="submit"
                onClick={handleClick}>
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
