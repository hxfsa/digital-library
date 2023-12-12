import { React, useEffect, useState } from "react";
import { NewsLetter } from "../components/NewsLetter";
import { SearchBar } from "../components/SearchBar";

import axios from "axios";

//assets

import kingdom from "../assets/images/kingdom.png";

export const Home = ({ setShowNavbarAndFooter }) => {
  const [searchValue, setSearchValue] = useState("");
  const [fetchedBook, setFetchedBook] = useState({});
  const [fetchedDescriptionAndImage, setFetchedDescriptionAndImage] = useState(
    {}
  );

  useEffect(() => {
    setShowNavbarAndFooter(true);
  }, []);

  //fetch api

  const api = `https://openlibrary.org/search.json?q=${searchValue}&limit=6`;

  //test
  //key = id (ol45804w)
  const descAndImgApi = `https://openlibrary.org${fetchedBook.key}.json`;

  const bookSearching = (e) => {
    setSearchValue(e.target.value);
  };

//fetch all informations i need from two urls
  async function handleFetchBook() {
    const response = axios.get(api);
    const data = (await response).data.docs[0];
    setFetchedBook(data);
    console.log(data);
    const secondRes = axios.get(descAndImgApi);
    const secondData = await secondRes;
    setFetchedDescriptionAndImage(secondData)
  }

  //author : fetchedBook.author_name((((([0])))))
  //date : fetchedBook.publish_year[0]
  //author array in first fetch, date in publish year array first element, description in second fetch
  // image https://covers.openlibrary.org/b/id/7984916-L.jpg replace the number with covers in the second fetch
  return (
    <div className="home bg-primaryLight">
      <div className="section flex justify-around pt-16 bg-primaryLight">
        <div className="intro-searching">
          <h1 className="text-6xl font-semibold">Reading opens</h1>
          <h2 className="text-6xl italic text-primaryDark mb-10">
            the infinite door
          </h2>
          <SearchBar
            searchValue={searchValue}
            bookSearching={bookSearching}
            handleFetchBook={handleFetchBook}
          />
        </div>
        <img src={kingdom} alt="kingdom" className="pb-12" />
      </div>
      <NewsLetter />
    </div>
  );
};
