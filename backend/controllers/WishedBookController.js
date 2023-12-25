const {
  selectWishedBooks,
  deleteWishBook,
} = require("../models/WishedBookManager");

const getAllWishedBooks = (req, res) => {
  selectWishedBooks().then(([result]) => {
    res.send(result);
  });
};

const unwishBook = (req, res) => {
  const { id } = req.params;
  deleteWishBook({ id }).then(([result]) => {
    if (result.affectedRows === 1) {
      res.status(201).json({ message: "Book deleted from wish list" });
    } else {
      res.status(404).json({
        message: "An error occured while deleting book from wish list",
      });
    }
  });
};

module.exports = { getAllWishedBooks, unwishBook };
