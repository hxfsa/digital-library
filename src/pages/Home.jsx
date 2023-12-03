import {React, useEffect} from "react";
import { NewsLetter } from "../components/NewsLetter";
import { SearchBar } from "../components/SearchBar";

//assets

import kingdom from "../assets/images/kingdom.png";

export const Home = ( { setShowNavbarAndFooter}) => {
  useEffect(() => {
    setShowNavbarAndFooter(true);
  }, []);
  return (
    <div className="home bg-primaryLight">
      <div className="section flex justify-around pt-16 bg-primaryLight">
        <div className="intro-searching">
          <h1 className="text-6xl font-semibold">Reading opens</h1>
          <h2 className="text-6xl italic text-primaryDark mb-10">
            the infinite door
          </h2>
          <SearchBar />
        </div>
        <img src={kingdom} alt="kingdom" className="pb-12" />
      </div>
      <NewsLetter />
    </div>
  );
};
