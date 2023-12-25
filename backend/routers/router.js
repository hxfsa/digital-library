const express = require("express");
const router = express.Router();

// const AdminController = require("../controllers/AdminController")
const BookController = require("../controllers/BookController");
const WishedBookController = require("../controllers/WishedBookController");

//bookx routes

router.get("/books", BookController.getAllBooks);
router.post("/books", BookController.postBook);
router.put("/books/:id", BookController.editBook);
router.delete("/books/:id", BookController.deleteBook);

//fetched books routes

router.get("/wishedbooks", WishedBookController.getAllWishedBooks);
router.delete("/wishedbooks/:id", WishedBookController.unwishBook);

module.exports = router;
