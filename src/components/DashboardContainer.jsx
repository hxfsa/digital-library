import React from "react";

//components
import { SearchBar } from "./SearchBar";

export const DashboardContainer = () => {
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
              <tr >
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">Harry Potter and the Prisoner of Azkaban</th>
                <th className=" font-normal">J.K Rowling</th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">Harry Potter and the Prisoner of Azkaban</th>
                <th className="font-normal">J.K Rowling</th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">Harry Potter and the Prisoner of Azkaban</th>
                <th className="font-normal">J.K Rowling</th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">Harry Potter and the Prisoner of Azkaban</th>
                <th className="font-normal">J.K Rowling</th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">Harry Potter and the Prisoner of Azkaban</th>
                <th className="font-normal">J.K Rowling</th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">Harry Potter and the Prisoner of Azkaban</th>
                <th className="font-normal">J.K Rowling</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
