import { React, useEffect, useState } from "react";
import axios from "axios";

//components
import { MoreBooksButton } from "../components/MoreBooksButton";
import { SearchBar } from "../components/SearchBar";

export const Collection = ({ setShowNavbarAndFooter }) => {
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  // //get the first index and the fourth to display 4 books by 4
  const firstElementOfTheNextFour = booksData[displayedBooks.length];
  const lastElementOfTheNextFour = booksData[displayedBooks.length + 4];
  const firstIndexOfTheNextFour = booksData.indexOf(firstElementOfTheNextFour);
  const lastIndexOfTheNextFour = booksData.indexOf(lastElementOfTheNextFour);
  const nextFour = booksData.slice(
    firstIndexOfTheNextFour,
    lastIndexOfTheNextFour
  );

  const url = `http://localhost:5500/books`;

  useEffect(() => {
    axios.get(url).then((response) => {
      const books = response.data;
      setBooksData(books);
      setDisplayedBooks(books);
      let booksFirstPart = books.slice(0, 4);
      setDisplayedBooks(booksFirstPart);
    });
  }, []);

  const handleMoreBooks = () => {
    //si il reste 4 ou + livres qui n'ont pas encore été affichés alors je les affiche sinon j'affiche tous ceux qui restent
    if (booksData.length - displayedBooks.length >= 4) {
      setDisplayedBooks([...displayedBooks, ...nextFour]);
    } else if (booksData.length - displayedBooks.length === 0) {
      setDisplayedBooks(displayedBooks);
    } else {
      let arrayOfAllNext = [];
      for (let i = firstIndexOfTheNextFour; i < booksData.length; i++) {
        arrayOfAllNext.push(booksData[i]);
      }
      setDisplayedBooks([...displayedBooks, ...arrayOfAllNext]);
      setButtonVisible(false);
    }
  };

  const handleSearchBook = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const filter = booksData.filter(
        (book) =>
          book.title.toLowerCase().includes(searchValue) ||
          book.author.toLowerCase().includes(searchValue)
      );
      setDisplayedBooks(filter);
      setButtonVisible(false);
    } else {
      setDisplayedBooks(booksData.slice(0, 4));
      setButtonVisible(true);
    }
  }, [searchValue]);

 
  return (
    <div className="collection bg-primaryLight">
      <div className="search flex justify-end mr-14 pt-8 bg-primaryLight">
        <SearchBar searchValue={searchValue} bookSearching={handleSearchBook} />
      </div>
      <div className="books flex mt-16 bg-primaryLight">
        {displayedBooks.map((book) => (
          <div
            className="book ease-in hover:scale-110 transition duration-200 mb-20 bg-primaryLight"
            key={book.id}
          >
            <img src={book.image} alt={book.title} className="bookImg h-80" />
            <div className="bookInfos text-center	flex flex-col">
              <h1 className="font-bold"> {book.title}</h1>
              <h2 className="font-semibold">{book.author}</h2>
            </div>
          </div>
        ))}
      </div>
      {buttonVisible && (
        <div className="moreBtn flex justify-center">
          <MoreBooksButton handleMoreBooks={handleMoreBooks} />
        </div>
      )}
    </div>
  );
};
