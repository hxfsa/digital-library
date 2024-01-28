import React from "react";

import search from "../assets/icons/search.svg";

export const SearchBar = ({ searchValue, bookSearching }) => {
  return (
    <div className="searchbar flex">
      <input
        type="text"
        placeholder="Search for a book..."
        className="placeholder:italic bg-white pl-8 pr-28 py-4 rounded-md border-solid  border border-primaryDark"
        autoFocus
        value={searchValue}
        onChange={bookSearching}
      />
    </div>
  );
};
