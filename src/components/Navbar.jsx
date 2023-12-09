import React from "react";
import { Link } from "react-router-dom";

//assets
import logo from "../assets/logos/logo.png";
import admin from "../assets/icons/admin.svg";

export const Navbar = () => {
  return (
    <nav className="navbar flex justify-between bg-primaryLight pl-8 w-full">
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
          <Link to="/login">
            <img src={admin} alt="admin-icon" className="h-8 px-4" />
          </Link>
        </button>
      </div>
    </nav>
  );
};
