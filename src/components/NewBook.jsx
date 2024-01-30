import React, { useState, useRef } from "react";
import axios from "axios";

export const NewBook = ({
  setAddingABook,
}) => {
  const [titleValue, setTitleValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const inputRef = useRef();

  const handleAddTitle = (e) => {
    const value = e.target.value;
    setTitleValue(value);
  };
  const handleAddAuthor = (e) => {
    const value = e.target.value;
    setAuthorValue(value);
  };
  const handleCloseModal = () => {
    setAddingABook(false);
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="newBookModalContainer flex justify-center bg-primaryLight right-18 rounded-xl">
        <div className="flex justify-center flex-col gap-8">
          <div className="header flex justify-between  mx-2 items-center">
            <h1 className="text-2xl text-primaryDark pt-2">New Book</h1>
            <button onClick={handleCloseModal} className="cruse text-gray-500">
              X
            </button>
          </div>

          <div className="flex items-center justify-between mx-4">
            <form
              enctype="multipart/form-data"
            //   onSubmit={hSubmit}
              className="flex flex-col "
            >
              <label htmlFor="" className="text-gray-500 text-xl">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="placeholder:italic bg-white pl-8 pr-28 py-4 rounded-md border-solid  border border-primaryDark"
                autoFocus
                required
                value={titleValue}
                onChange={handleAddTitle}
              />
              <label htmlFor="" className="text-gray-500 text-xl mr-2">
                Author
              </label>
              <input
                type="text"
                placeholder="Author"
                className="placeholder:italic bg-white pl-8 pr-28 py-4 rounded-md border-solid  border border-primaryDark"
                required
                value={authorValue}
                onChange={handleAddAuthor}
              />{" "}
              <label htmlFor="" className="text-gray-500 text-xl mr-2">
                Image
              </label>
              <input type="file" name="monfichier" ref={inputRef} required />
              <div className="footer w-4/12 flex justify-around my-4">
                <button
                  className=" px-3 bg-primaryDark rounded-lg text-white"
                  type="submit"
                >
                  Save
                </button>
                <button onClick={handleCloseModal} className="text-gray-500">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
