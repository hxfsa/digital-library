const {
  deleteBookById,
  selectAllBooks,
  updateBook,
  addBook,
} = require("../models/BookManager");

const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const getAllBooks = (req, res) => {
  selectAllBooks().then((result) => {
    res.send(result[0]);
  });
};

// console.warn(req.file);
//peut etre que le pb vient du "path" seb a mis filename avec le chemin à la place de path
// {
//   fieldname: 'cover_image',
//   originalname: 'Capture dâ\x80\x99Ã©cran (3).png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   destination: './public/uploads/',
//   filename: 'f73ce91256dd0b333d38602b5aaee9cc',
//   path: 'public\\uploads\\f73ce91256dd0b333d38602b5aaee9cc',
//   size: 3298633
// }
const postBook = (req, res) => {
  const { originalname, path } = req.file;

  fs.renameSync(path, `./public/uploads/${uuidv4()}-${originalname}`);
  (err) => {
    if (err) throw err;
    console.log("Rename completed!");
  };

  const { title, author } = req.body;
  const cover_image = `./public/uploads/${uuidv4()}-${originalname}`;

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
