import React from "react";

export const MoreBooksButton = ({ handleMoreBooks }) => {
  return (
    <div className="moreBtn">
      <button className="border font-montserrat bg-primaryDark text-white py-4 px-8 rounded-md hover:text-primaryDark hover:bg-white hover:border-primaryDark"
      onClick={handleMoreBooks}>MORE BOOKS</button>
    </div>
  );
};
