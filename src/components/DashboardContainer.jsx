import React from "react";

//components
import { SearchBar } from "./SearchBar";

export const DashboardContainer = ({ books }) => {
  return (
    <div className="adminContainer flex flex-col items-center h-full">
      <h1 className="text-2xl font-semibold text-primaryDark w-full pl-28 my-6">
        DASHBOARD
      </h1>

      <div className="manageContentContainer bg-white w-8/12 rounded-lg h-3/4 overflow-scroll ">
        <div className="searchBarAdmin m-6">
          <SearchBar />
        </div>
        <div className="adminTable">
          <table className="w-full">
            <thead className="bg-primaryDark text-white font-light">
              <tr>
                <th className="py-3 font-semibold">ID</th>
                <th className="font-semibold">Title</th>
                <th className="font-semibold">Author(s)</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="border">
                <th className="py-4 font-normal">{book.id}</th>
                <th className="font-normal">
                  {book.title}
                </th>
                <th className=" font-normal">{book.author}</th>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
