import React, { useState } from "react";

//packages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      toast.success("Thanks for subscribing!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmail("");
    } else if ((!regEx.test(email) && email !== "") || email == "") {
      toast.error("Unvalid email.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmail("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="newsletter py-16 bg-primaryDark w-full flex justify-around items-center">
      <div className="text text-white bg-primaryDark ">
        <h1 className="text-2xl bg-primaryDark">
          SUBSCRIBE TO OUR NEWS LETTER
        </h1>
        <p className="text-xs updates bg-primaryDark">
          Enter your email adress to receive regular updates
        </p>
      </div>
      <form
        className="email-form flex items-center rounded-l-md rounded-r-md"
        onClick={handleFormSubmit}
      >
        <input
          id="email"
          aria-label="Email Address"
          placeholder="Email Address"
          type="email"
          value={email}
          className="newsletterInput placeholder:text-primaryLight placeholder:italic bg-primaryDark border py-2 pl-4 pr-8 rounded-l-md text-primaryLight"
          onChange={handleEmail}
        />
        <button
          className="text-primaryDark bg-white border-white border-1 p-2 font-semibold text-s rounded-r-md"
          onClick={emailValidation}
        >
          Subscribe
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};
