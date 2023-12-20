import { React, useEffect, useState } from "react";
import { NewsLetter } from "../components/NewsLetter";
import { SearchBar } from "../components/SearchBar";

import axios from "axios";

//assets

import kingdom from "../assets/images/kingdom.png";
import { SearchSuggestions } from "../components/SearchSuggestions";

export const Home = ({ setShowNavbarAndFooter }) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setShowNavbarAndFooter(true);
    getBookInfos();
  }, []);

  //fetch api

  const api = `https://openlibrary.org/search.json?title=${searchValue}&fields=*&limit=6&jscmd=details`;

  //key = id (ol45804w)

  const bookSearching = (e) => {
    setSearchValue(e.target.value);
    getBookInfos();
  };

  //fetch all informations i need from two apis

  //Home component needs only getBookInfos
  async function getBookInfos() {
    if (searchValue.length >= 2 && searchValue !== "") {
      await axios.get(api).then(async (response) => {
        const books = response.data.docs;
        const suggestions = books.map((book) => {
          return {
            title: book.title,
            author: book.author_name,
            cover: book.cover_i,
            date: book.publish_year,
            key: book.key,
          };
        });
        setSuggestions(suggestions);
      });
    } else {
      setSuggestions([])
    }
  }

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
            handleFetchBook={() => getBookInfos()}
          />
          {searchValue !== "" && <SearchSuggestions
            searchValue={searchValue}
            suggestions={suggestions}
          />}
        </div>
        <img src={kingdom} alt="kingdom" className="pb-12" />
      </div>
      <NewsLetter />
    </div>
  );
};
