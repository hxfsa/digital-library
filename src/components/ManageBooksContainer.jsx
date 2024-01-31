import React, { useEffect, useState } from "react";
import axios from "axios";

//components
import { SearchBar } from "./SearchBar";

//assets
import pencil from "../assets/icons/pencil.svg";
import bin from "../assets/icons/bin.svg";
import { NewBook } from "./NewBook";
import { EditBookModal } from "./EditBookModal";

export const ManageBooksContainer = ({
  books,
  manageBooksSearching,
  manageSearchValue,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");

  const [newBooks, setNewBooks] = useState(books);
  const [addingABook, setAddingABook] = useState(false);
  const [editingBook, setEditingBook] = useState(false);
  const [bookIWantToEdit, setBookIWantToEdit] = useState({});



  const handleAddBook = () => {
    setAddingABook(true);
  };

  const editBook = (id) => {
    setEditingBook(true);
    const thisBook = books.filter((book) => book.id == id);
    setBookIWantToEdit(thisBook[0]);
  };



  useEffect(() => {
    console.log(bookIWantToEdit, "cleui la ");

  }, [bookIWantToEdit])

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5500/books/${id}`);
    setNewBooks(newBooks.filter((book) => book.id != id));
  };

  return (
    <div className="adminContainer flex flex-col items-center h-full">
      <h1 className="text-2xl font-semibold text-primaryDark w-full pl-28 my-6">
        MANAGE CONTENT
      </h1>

      <div className="manageContentContainer bg-white w-8/12 rounded-lg h-3/4 overflow-scroll ">
        <header>
          <div className="searchBarAdmin m-6 flex justify-between">
            <SearchBar
              bookSearching={manageBooksSearching}
              searchValue={manageSearchValue}
            />
            <button
              onClick={handleAddBook}
              className="bg-primaryDark text-white h-10 px-2 flex items-center rounded-xl hover:bg-white hover:text-primaryDark hover:border-2 hover:border-primaryDark"
            >
              <span className="text-2xl pr-1">+</span> New Book
            </button>
          </div>
        </header>
        {addingABook && <NewBook setAddingABook={setAddingABook} title={title} author={author} img={img} setTitle={setTitle} setAuthor={setAuthor} setImg={setImg} />}
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
              {editingBook && <EditBookModal bookIWantToEdit={bookIWantToEdit} setEditingBook={setEditingBook} title={title} author={author} newBooks={newBooks} setNewBooks={setNewBooks}/>}

              {newBooks.map((book) => (
                <tr key={book.id} className="border">
                  <th className="py-4 font-normal">{book.id}</th>
                  <th className="font-normal">{book.title}</th>
                  <th className=" font-normal">{book.author}</th>
                  <th className="flex justify-center gap-4 pt-6">
                    <button onClick={() => editBook(book.id)}>
                      <img src={pencil} alt="pencil icon" className="h-4" />
                    </button>
                    <button onClick={() => deleteBook(book.id)}>
                      <img src={bin} alt="bin icon" className="h-4" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
