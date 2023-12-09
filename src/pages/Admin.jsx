import { React, useEffect } from "react";
import { Link } from "react-router-dom";

//assets
import logoAdmin from "../assets/logos/logo-admin.png";
import off from "../assets/icons/off.svg";
import { AdminContainer } from "../components/AdminContainer";
export const Admin = ({ setShowNavbarAndFooter }) => {
  useEffect(() => {
    setShowNavbarAndFooter(false);
  }, []);
  return (
    <div className="admin bg-primaryDark h-screen flex">
      <div className="adminMenu bg-primaryDark w-1/5 flex flex-col items-center">
        <div className="adminLogo w-24 bg-primaryDark">
          <img src={logoAdmin} alt="logo" className=" mb-24" />
        </div>
        <div className="menuSection flex flex-col bg-primaryDark">
          <span>Dashboard</span>
          <span>Manage books</span>
          <span>Wish List</span>
          <Link to="/">
            <button className="offBtn bg-primaryDark flex items-center ease-in hover:scale-110 transition duration-200">
              <img src={off} alt="" className="offImg bg-primaryDark h-16 " />
              <span className="bg-primaryDark">Log Out</span>
            </button>
          </Link>
        </div>
      </div>
      <AdminContainer />
    </div>
  );
};
