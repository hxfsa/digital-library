import React from "react";
import { Link } from "react-router-dom";

export const SearchSuggestions = ({suggestions}) => {
  // const title = suggestion.title;
  // if (title.length > 15) {

  // }
  return (
    <div className="bg-primaryDark">
      <ul>
        {suggestions.map((suggestion) => ( 
        <Link to={`${suggestion.key}`}>
          <li key={suggestion.key}>{suggestion.title}</li>
        </Link>
          
          // <li key={suggestion.key}>{suggestion.title.length > 30 ? suggestion.title.substring(0,30) : suggestion.title}</li>
        ))}
      </ul>
    </div>
  );
};
