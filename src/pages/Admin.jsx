import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//assets
import logoAdmin from "../assets/logos/logo-admin.png";
import off from "../assets/icons/off.svg";
import { DashboardContainer } from "../components/DashboardContainer";
import { ManageBooksContainer } from "../components/ManageBooksContainer";
import { WishListContainer } from "../components/WishListContainer";

export const Admin = ({ setShowNavbarAndFooter }) => {
  const [isDashboardActive, setIsDashboardActive] = useState(false);
  const [isManageBooksActive, setIsManageBooksActive] = useState(false);
  const [isWishListActive, setIsWishListActive] = useState(false);
  const [books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState(books);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setShowNavbarAndFooter(false);
    setIsDashboardActive(true);
  }, []);

  const handleDashboard = () => {
    setIsDashboardActive(true);
    setIsManageBooksActive(false);
    setIsWishListActive(false);
  };

  const handleManageBooks = () => {
    setIsDashboardActive(false);
    setIsManageBooksActive(true);
    setIsWishListActive(false);
  };

  const handleWishList = () => {
    setIsDashboardActive(false);
    setIsManageBooksActive(false);
    setIsWishListActive(true);
  };

  const url = `http://localhost:5500/books`;

  useEffect(() => {
    axios.get(url).then((response) => {
      const fetchedData = response.data;
      setBooks(fetchedData);
      setDisplayedBooks(fetchedData);
    });
  }, []);

  const filterBooks = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  
  useEffect(() => {
    if (searchValue !== "") {
      const filteredBooks = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          book.author.toLowerCase().includes(searchValue.toLowerCase())
      );
      setDisplayedBooks(filteredBooks);
    } else {
      setDisplayedBooks(books);
    }
  }, [searchValue])


  return (
    <div className="admin bg-primaryDark h-screen flex">
      <div className="adminMenu bg-primaryDark w-1/5 flex flex-col items-center">
        <div className="adminLogo w-24 bg-primaryDark">
          <Link to="/">
            <img src={logoAdmin} alt="logo" className=" mb-24" />
          </Link>
        </div>
        <div className="menuSection flex flex-col bg-primaryDark">
          <ul>
            <button onClick={handleDashboard}>
              <li>Dashboard</li>
            </button>
            <button onClick={handleManageBooks}>
              <li>Manage books</li>
            </button>
            <button onClick={handleWishList}>
              <li>Wish List</li>
            </button>
            <li>
              <Link to="/">
                <button className="offBtn bg-primaryDark flex items-center ease-in hover:scale-110 transition duration-200">
                  <img
                    src={off}
                    alt=""
                    className="offImg bg-primaryDark h-16 "
                  />
                  <li className="bg-primaryDark">Log Out</li>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="adminTable bg-primaryLight mt-28 w-full">
        {isDashboardActive && (
          <DashboardContainer
            books={displayedBooks}
            dashboardBooksSearching={filterBooks}
            dashboardSearchValue={searchValue}
          />
        )}
        {isManageBooksActive && (
          <ManageBooksContainer
            books={displayedBooks}
            manageBooksSearching={filterBooks}
            manageSearchValue={searchValue}
          />
        )}
        {isWishListActive && (
          <WishListContainer
            books={displayedBooks}
            wishListSearching={filterBooks}
            wishListSearchValue={searchValue}
          />
        )}
      </div>
    </div>
  );
};
