const {
  deleteBookById,
  selectAllBooks,
  updateBook,
  addBook,
} = require("../models/BookManager");

const getAllBooks = (req, res) => {
  selectAllBooks().then((result) => {
    res.send(result[0]);
  });
};

const postBook = (req, res) => {
  const { title, author, cover_image } = req.body;
  addBook({ title, author, cover_image }).then(([result]) => {
    if (result.affectedRows === 1) {
      res.status(201).json({ message: "Book added to db" });
    } else {
      res
        .status(404)
        .json({ message: "An error occured while adding the book to the db." });
    }
  });
};

const editBook = (req, res) => {
  const { id } = req.params;
  const { title, author, cover_image } = req.body;
  updateBook({ title, author, cover_image, id }).then(([result]) => {
    if (result.affectedRows === 1) {
      res.status(201).json({ message: "Book edited" });
    } else {
      res
        .status(404)
        .json({ message: "An error occured while editing the book." });
    }
  });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  deleteBookById({ id }).then(([result]) => {
    if (result.affectedRows === 1) {
      res.status(201).json({ message: "Book deleted" });
    } else {
      res
        .status(404)
        .json({ message: "An error occured while deleting the book." });
    }
  });
};

module.exports = { getAllBooks, postBook, editBook, deleteBook };
