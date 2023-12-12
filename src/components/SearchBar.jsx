import React from "react";

import search from "../assets/icons/search.svg";

export const SearchBar = ( { searchValue, bookSearching, handleFetchBook } ) => {
  return (
    <div className="searchbar flex bg-primaryLight">
      <input
        type="text"
        placeholder="Search for a book..."
        className="placeholder:italic bg-white pl-8 pr-28 py-4 rounded-l-md "
        autoFocus
        value={searchValue}
        onChange={bookSearching}
        
      />
      <button className="searchBtn bg-primaryDark h-16 w-16 flex items-center justify-center rounded-r-md" onClick={handleFetchBook}>
        <img src={search} alt="search button" className="h-8 bg-primaryDark" />
      </button>
    </div>
  );
};
