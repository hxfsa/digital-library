import React from "react";

//components
import { SearchBar } from "./SearchBar";

//assets
import pencil from "../assets/icons/pencil.svg";
import bin from "../assets/icons/bin.svg";

export const ManageBooksContainer = () => {
  return (
    <div className="adminContainer flex flex-col items-center h-full">
      <h1 className="text-2xl font-semibold text-primaryDark w-full pl-28 my-6">
        MANAGE CONTENT
      </h1>

      <div className="manageContentContainer bg-white w-8/12 rounded-lg h-3/4 overflow-scroll ">
        <header>
          <div className="searchBarAdmin m-6 flex justify-between">
            <SearchBar />
            <button className="bg-primaryDark text-white h-10 px-2 flex items-center rounded-xl hover:bg-white hover:text-primaryDark hover:border-2 hover:border-primaryDark">
              <span className="text-2xl pr-1">+</span> New Book
            </button>
          </div>
        </header>
        <div className="adminTable">
          <table className="w-full">
            <thead className="bg-primaryDark text-white font-light">
              <tr>
                <th className="py-3 font-semibold">ID</th>
                <th className="font-semibold">Title</th>
                <th className="font-semibold">Author(s)</th>
                <th className="font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">
                  Harry Potter and the Prisoner of Azkaban
                </th>
                <th className=" font-normal">J.K Rowling</th>
                <th className="flex justify-center gap-4 pt-6">
                  <button>
                    <img src={pencil} alt="pencil icon" className="h-4" />
                  </button>
                  <button>
                    <img src={bin} alt="bin icon" className="h-4" />
                  </button>
                </th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">
                  Harry Potter and the Prisoner of Azkaban
                </th>
                <th className="font-normal">J.K Rowling</th>
                <th className="flex justify-center gap-4 pt-6">
                  <button>
                    <img src={pencil} alt="pencil icon" className="h-4" />
                  </button>
                  <button>
                    <img src={bin} alt="bin icon" className="h-4" />
                  </button>
                </th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">
                  Harry Potter and the Prisoner of Azkaban
                </th>
                <th className="font-normal">J.K Rowling</th>
                <th className="flex justify-center gap-4 pt-6">
                  <button>
                    <img src={pencil} alt="pencil icon" className="h-4" />
                  </button>
                  <button>
                    <img src={bin} alt="bin icon" className="h-4" />
                  </button>
                </th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">
                  Harry Potter and the Prisoner of Azkaban
                </th>
                <th className="font-normal">J.K Rowling</th>
                <th className="flex justify-center gap-4 pt-6">
                  <button>
                    <img src={pencil} alt="pencil icon" className="h-4" />
                  </button>
                  <button>
                    <img src={bin} alt="bin icon" className="h-4" />
                  </button>
                </th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">
                  Harry Potter and the Prisoner of Azkaban
                </th>
                <th className="font-normal">J.K Rowling</th>
                <th className="flex justify-center gap-4 pt-6">
                  <button>
                    <img src={pencil} alt="pencil icon" className="h-4" />
                  </button>
                  <button>
                    <img src={bin} alt="bin icon" className="h-4" />
                  </button>
                </th>
              </tr>
              <tr className="border-2">
                <th className="py-4 font-normal">1</th>
                <th className="font-normal">
                  Harry Potter and the Prisoner of Azkaban
                </th>
                <th className="font-normal">J.K Rowling</th>
                <th className="flex justify-center gap-4 pt-6">
                  <button>
                    <img src={pencil} alt="pencil icon" className="h-4" />
                  </button>
                  <button>
                    <img src={bin} alt="bin icon" className="h-4" />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
