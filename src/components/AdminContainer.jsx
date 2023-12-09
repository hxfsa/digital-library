import React from "react";

//components
import { SearchBar } from "../components/SearchBar";

export const AdminContainer = () => {
  return (
    <div className="adminContainer bg-primaryLight mt-28 w-full ">
      <h1>DASHBOARD</h1>
      <div className="manageContentContainer bg-white">
        <SearchBar />
        <div className="adminTable bg-white">
          <table>
            <thead>
              <tr>
                <th className="bg-white">ID</th>
                <th className="bg-white">Title</th>
                <th className="bg-white">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-white">1</th>
                <th className="bg-white">Harry Potter and the</th>
                <th className="bg-white">J.K Rowling</th>
              </tr>
              <tr>
                <th className="bg-white">1</th>
                <th className="bg-white">Harry Potter and the</th>
                <th className="bg-white">J.K Rowling</th>
              </tr>
              <tr>
                <th className="bg-white">1</th>
                <th className="bg-white">Harry Potter and the</th>
                <th className="bg-white">J.K Rowling</th>
              </tr>
              <tr>
                <th className="bg-white">1</th>
                <th className="bg-white">Harry Potter and the</th>
                <th className="bg-white">J.K Rowling</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
