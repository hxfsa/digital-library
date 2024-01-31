const express = require("express");
const router = express.Router();

//upload
const multer = require("multer");
const upload = multer({ dest: "./public/uploads/" });

const { v4: uuidv4 } = require("uuid");

// const AdminController = require("../controllers/AdminController")
const BookController = require("../controllers/BookController");
const WishedBookController = require("../controllers/WishedBookController");

//bookx routes

router.get("/books", BookController.getAllBooks);
router.post("/books", upload.single("cover_image"), BookController.postBook);
router.put("/books/:id", BookController.editBook);
router.delete("/books/:id", BookController.deleteBook);

//fetched books routes

router.get("/wishedbooks", WishedBookController.getAllWishedBooks);
router.delete("/wishedbooks/:id", WishedBookController.unwishBook);

module.exports = router;
