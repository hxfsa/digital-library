import React from "react";

export const NewsLetter = () => {
  return (
    <div className="newsletter py-16 bg-primaryDark w-full flex justify-around items-center">
      <div className="text text-white bg-primaryDark ">
        <h1 className="text-2xl bg-primaryDark">SUBSCRIBE TO OUR NEWS LETTER</h1>
        <p className="text-xs updates bg-primaryDark">
          Enter your email adress to receive regular updates
        </p>
      </div>
      <form className="email-form flex items-center rounded-l-md rounded-r-md">
        <input
          aria-label="Email Address"
          placeholder="Email Address"
          type="email"
          className="newsletterInput placeholder:text-primaryLight placeholder:italic bg-primaryDark border py-2 pl-4 pr-8 rounded-l-md text-primaryLight"
        />
          <button className="text-primaryDark bg-white border-white border-1 p-2 font-semibold text-s rounded-r-md">Subscribe</button>
      </form>
    </div>
  );
};
