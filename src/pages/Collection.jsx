import { React, useEffect, useState } from "react";

//components
import { MoreBooksButton } from "../components/MoreBooksButton";
import { SearchBar } from "../components/SearchBar";

//assets
import narnia from "../assets/images/narnia.png";
import hp2 from "../assets/images/hp2.png";
import adcc from "../assets/images/adcc.png";
import hp8 from "../assets/images/hp8.png";

export const Collection = ({ setShowNavbarAndFooter }) => {
  const books = [
    {
      id: 1,
      title: "Le Monde de Narnia",
      author: "C.S Lewis",
      image: narnia,
    },
    {
      id: 2,
      title: "Harry Potter et la Chambre des Secrets",
      author: "J.K Rowling",
      image: hp2,
    },
    {
      id: 3,
      title: "L'appel du Coucou",
      author: "Robert Galbraith",
      image: adcc,
    },
    {
      id: 4,
      title: "Harry Potter et l'enfant maudit",
      author: "J.K Rowling",
      image: hp8,
    },
    {
      id: 5,
      title: "Charlie et la Chocolaterie",
      author: "Roald Dahl",
      image:
        "https://m.media-amazon.com/images/I/81Fe-GJQDuL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 6,
      title: "Dragon Ball Z",
      author: "Akiya Toriyama",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483474406l/3685347.jpg",
    },
    {
      id: 7,
      title: "Dragon Ball GT",
      author: "Akiya Toriyama",
      image: "https://pictures.abebooks.com/isbn/9783551771827-fr.jpg",
    },
    {
      id: 8,
      title: "detective conan",
      author: "Aoyama",
      image:
        "https://m.media-amazon.com/images/I/81p+8xivWbL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      title: "Titeuf",
      author: "jsp",
      image:
        "https://m.media-amazon.com/images/I/81jS3gh8+IL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 10,
      title: "HAFSA",
      author: "jsp",
      image:
        "https://m.media-amazon.com/images/I/81jS3gh8+IL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 11,
      title: "HAHAHAHAHAH",
      author: "jsp",
      image:
        "https://m.media-amazon.com/images/I/81jS3gh8+IL._AC_UF894,1000_QL80_.jpg",
    },
  ];
  let booksFirstPart = books.slice(0, 4);

  const [booksData, setBooksData] = useState(booksFirstPart);
  const [buttonVisible, setButtonVisible] = useState(true);
  useEffect(() => {
    setBooksData(booksData);
  }, [booksData]);

  //get the first index and the fourth to display 4 books by 4
  const firstElementOfTheNextFour = books[booksData.length];
  const lastElementOfTheNextFour = books[booksData.length + 4];
  const firstIndexOfTheNextFour = books.indexOf(firstElementOfTheNextFour);
  const lastIndexOfTheNextFour = books.indexOf(lastElementOfTheNextFour);
  const nextFour = books.slice(firstIndexOfTheNextFour, lastIndexOfTheNextFour);

  const handleMoreBooks = () => {
    //si il reste 4 ou + livres qui n'ont pas encore été affichés alors je les affiche sinon j'affiche tous ceux qui restent
    if (books.length - booksData.length >= 4) {
      setBooksData([...booksData, ...nextFour]);
    } else if (books.length - booksData.length === 0) {
      setBooksData(booksData);
    } else {
      console.log(firstIndexOfTheNextFour, "has to be 8");
      let arrayOfAllNext = [];
      for (let i = firstIndexOfTheNextFour; i < books.length; i++) {
        console.log(books[i], "has to display from titeuf to hafsa");
        arrayOfAllNext.push(books[i]);
      }
      console.log(arrayOfAllNext);
      setBooksData([...booksData, ...arrayOfAllNext]);
      setButtonVisible(false);
    }
  };

  return (
    <div className="collection bg-primaryLight">
      <div className="search flex justify-end mr-14 pt-8 bg-primaryLight">
        <SearchBar />
      </div>
      <div className="books flex mt-16 bg-primaryLight">
        {booksData.map((book) => (
          <div className="book ease-in hover:scale-110 transition duration-200 mb-20 bg-primaryLight">
            <img
              src={book.image}
              alt={book.title}
              key={book.id}
              className="bookImg h-80"
            />
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
