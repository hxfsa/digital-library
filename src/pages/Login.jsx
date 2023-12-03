import React, { useEffect } from "react";
import books from "../assets/images/books.png";
export const Login = ({ setShowNavbarAndFooter }) => {
  useEffect(() => {
    setShowNavbarAndFooter(false);
  }, []);
  return (
    <div className="login bg-primaryDark flex justify-center">
      <div className="loginContainer bg-primaryLight w-1/2 flex items-center justify-around rounded-lg">
        <img src={books} alt="" className="w-1/4" />
        <div className="loginForm w-1/2 flex flex-col justify-center items-center">
          <div className="loginText flex flex-col items-center">
            <h1 className="text-xl">Welcome Back Queen!</h1>
            <h2 className="font-semibold text-2xl mb-8">
              Login to your account
            </h2>
          </div>
          <form action="" className="flex flex-col items-center">
            <input
              type="email"
              required
              placeholder="Email"
              className="bg-white pl-8 py-2 mb-4 placeholder:italic rounded-lg"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="bg-white pl-8 py-2 mb-4 placeholder:italic rounded-lg"
            />
            <button className="bg-primaryDark border text-white px-4 py-1 rounded-3xl hover:text-primaryDark hover:bg-white hover:border-primaryDark">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
