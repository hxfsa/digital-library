import React from "react";

//assets
import logo from "../assets/logos/logo.png";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

export const Footer = () => {
  const socialMedias = [
    { id: 1, media: "github", icon: github},
    { id: 2, media: "linkedin", icon: linkedin},
    { id: 3, media: "instagram", icon: instagram},
  ];
  return (
    <footer className="footer flex justify-between w-full px-8 bg-primaryLight pt-6 items-center ">
      <div className="logo-rights flex items-end gap-4">
        <img src={logo} alt="logo" className="h-10" />
        <span className="text-xs pb-1	">
          {" "}
          © 2023 Books Kingdom. All Rights Reserved.
        </span>
      </div>
      <div className="social-medias flex items-center">
        {socialMedias.map((media) => (
        <img src={media.icon} alt={media.media} />
        ))}
      </div>
    </footer>
  );
};
