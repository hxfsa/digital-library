import React from "react";

//components
import { SearchBar } from "./SearchBar";

//assets
import brokenheart from "../assets/icons/broken-heart.svg";

export const WishListContainer = () => {
  return (
    <div className="adminContainer flex flex-col items-center h-full">
      <h1 className="text-2xl font-semibold text-primaryDark w-full pl-28 my-6">
        WISH LIST
      </h1>

      <div className="manageContentContainer bg-white w-8/12 rounded-lg h-3/4 overflow-scroll ">
        <header>
          <div className="searchBarAdmin m-6 flex justify-between">
            <SearchBar />
          </div>
        </header>
        <div className="adminTable">
          <table className="w-full">
            <thead className="bg-primaryDark text-white font-light">
              <tr>
                <th className="py-3 font-semibold">ID</th>
                <th className="font-semibold">Title</th>
                <th className="font-semibold">Author(s)</th>
                <th className="font-semibold">Unwish</th>
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
                    <img
                      src={brokenheart}
                      alt="broken-heart icon"
                      className="h-6"
                    />
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
                    <img
                      src={brokenheart}
                      alt="broken-heart icon"
                      className="h-6"
                    />
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
                    <img
                      src={brokenheart}
                      alt="broken-heart icon"
                      className="h-6"
                    />
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
                    <img
                      src={brokenheart}
                      alt="broken-heart icon"
                      className="h-6"
                    />
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
                    <img
                      src={brokenheart}
                      alt="broken-heart icon"
                      className="h-6"
                    />
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
                    <img
                      src={brokenheart}
                      alt="broken-heart icon"
                      className="h-6"
                    />
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
