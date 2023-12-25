const {
  deleteBookById,
  selectAllBooks,
  updateBook,
} = require("../models/BookManager");

const getAllBooks = (req, res) => {
  selectAllBooks().then((result ) => {
    res.send(result[0])
  });
};

const editBook = (req, res) => {
  updateBook();
};

const deleteBook = (req, res) => {
  deleteBookById();
};

module.exports = { getAllBooks, editBook, deleteBook };
