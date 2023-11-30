import React from "react";

export const NewsLetter = () => {
  return (
    <div className="newsletter mb-16 py-16 bg-primaryDark w-full flex justify-around items-center">
      <div className="text text-white">
        <h1 className="text-2xl">SUBSCRIBE TO OUR NEWS LETTER</h1>
        <p className="text-xs updates">
          Enter your email adress to receive regular updates
        </p>
      </div>
      <form className="email-form flex items-center">
        <input
          aria-label="Email Address"
          placeholder="Email Address"
          type="email"
          required
          className="placeholder:text-white font-semibold bg-primaryDark border py-2 pl-4 pr-8 rounded-l"
        />
          <button className="text-primaryDark bg-white border-white border-1 rounded-r p-2 font-semibold text-s">Subscribe</button>
      </form>
    </div>
  );
};
