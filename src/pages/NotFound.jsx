import React from "react";
import notFound from "../assets/images/404.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const NotFound = ( { setShowNavbarAndFooter}) => {
  useEffect(() => {
    setShowNavbarAndFooter(false);
  }, []);
  return (
    <div className="notFound flex flex-col items-center bg-white">
      <img src={notFound} alt="404 image" className="" />
      <Link to="/">
        <button className="border px-8 py-4 rounded-lg bg-primaryDark text-white font-semibold hover:bg-white hover:text-primaryDark hover:border-primaryDark">
          Take Me Home
        </button>
      </Link>
    </div>
  );
};
