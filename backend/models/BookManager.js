const db = require("../db");

const selectAllBooks = () => {
  const SQL = "SELECT * FROM book";
  return db.query(SQL);
};

const updateBook = ({ title, author, cover_image, id }) => {
  const SQL =
    "UPDATE book SET title = ?, author = ?, cover_image = ? * FROM book WHERE id = ?";
  return db.query(SQL, [title, author, cover_image, id]);
};

const deleteBookById = ({ id }) => {
  const SQL = "DELETE FROM book WHERE id = ?";
  return db.query(SQL, [id]);
};

module.exports = { deleteBookById, selectAllBooks, updateBook };
