  express = require("express"),
  router = express.Router();

  const {createBook, getBook, getBooks, updateBook, deleteBook} = require('../controllers/bookController')

// CREATE Book
router.post("/create-book", createBook)

// READ Books
router.get("/", getBooks)

// Get Single Book
router.get("/edit-book/:id", getBook)

// Update Book
router.put("/update-book/:id", updateBook)

// Delete Book
router.delete("/delete-book/:id", deleteBook)

module.exports = router;