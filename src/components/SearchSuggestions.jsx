import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const SearchSuggestions = ({ suggestions }) => {
  useEffect(() => {
    console.log(suggestions);
  }, [suggestions])
  return (
    <div className="bg-white w-80 mt-2 rounded-lg border-primaryDark border-2 border-blur">
      <ul>
        {suggestions.map((suggestion) => {
          console.log(suggestion);
          const id = suggestion.key.substring(7, 15);
          console.log(id);
          return (
            <Link to={`/book/${id}`} key={suggestion.key}>
              {/* <li key={suggestion.key}>{suggestion.title}</li> */}
              <li>
                {suggestion.title.length > 39
                  ? suggestion.title.substring(0, 39) + "..."
                  : suggestion.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
