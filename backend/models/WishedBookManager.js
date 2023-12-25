const db = require("../db");

const selectWishedBooks = () => {
  const SQL = "SELECT * FROM fetched_book";
  return db.query(SQL);
};

const deleteWishBook = ({ id }) => {
  const SQL = "DELETE from fetched_book WHERE id = ?";
  return db.query(SQL, [id]);
};

module.exports = { selectWishedBooks, deleteWishBook };
