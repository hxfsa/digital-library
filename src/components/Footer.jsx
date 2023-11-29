import React from "react";

//assets
import logo from "../assets/logos/logo.png";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer bg-primaryLight flex justify-between w-full px-8 ">
      <div className="logo-rights flex items-end gap-4">
        <img src={logo} alt="logo" className="h-10" />
        <span className="text-xs pb-1	"> © 2023 Books Kingdom. All Rights Reserved.</span>
      </div>
      <div className="social-medias flex items-center">
        <img src={github} alt="github icon" className="h-6" />
        <img src={linkedin} alt="linkedin icon" className="h-8" />
        <img src={instagram} alt="instagram icon" className="h-7" />
      </div>
    </footer>
  );
};
