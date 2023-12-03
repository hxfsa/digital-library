import {React, useEffect} from "react";

//components
import { MoreBooksButton } from "../components/MoreBooksButton";
import { SearchBar } from "../components/SearchBar";

//assets
import narnia from "../assets/images/narnia.png";
import hp2 from "../assets/images/hp2.png";
import adcc from "../assets/images/adcc.png";
import hp8 from "../assets/images/hp8.png";

export const Collection = ( { setShowNavbarAndFooter}) => {
  useEffect(() => {
    setShowNavbarAndFooter(true);
  }, []);
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
  ];
  return (
    <div className="collection">
      <div className="search flex justify-end mr-14 mt-8">
        <SearchBar />
      </div>
      <div className="books flex justify-around mt-16">
        {books.map((book) => (
          <div className="book  ease-in hover:scale-110 transition duration-200 mb-20">
            <img src={book.image} alt={book.title} key={book.id} />
            <div className="bookInfos text-center	flex flex-col">
              <h1 className="font-bold"> {book.title}</h1>
              <h2 className="font-semibold">{book.author}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="moreBtn flex justify-center">
        <MoreBooksButton />
      </div>
    </div>
  );
};
