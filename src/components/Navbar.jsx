import React from "react";
import { Link } from "react-router-dom";

//assets
import logo from "../assets/logos/logo.png";
import admin from "../assets/icons/admin.svg";

export const Navbar = () => {
  return (
    <div className="navbar bg-primaryLight flex justify-between">
      <Link to="/">
        <img src={logo} alt="logo" className="h-24" />
      </Link>
      <div className="links-admin flex w-1/4 justify-between items-center">
        <div className="links">
          <ul className="flex flex-row gap-6 font-montserrrat font-semibold">
            <li className="hover:text-primaryDark">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-primaryDark">
              <Link to="/collection">Collection</Link>
            </li>
          </ul>
        </div>
        <button>
          <img src={admin} alt="admin-icon" className="h-8 px-4" />
        </button>
      </div>
    </div>
  );
};
