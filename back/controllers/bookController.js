//Book Model
const bookSchema = require('../models/Book');

const createBook = ((req, res, next) => {
    bookSchema.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log(data);
          res.json(data);
        }
      });
})

const getBook = ((req, res, next) => {
    bookSchema.findById(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
})

const getBooks = ((req, res, next) => {
    bookSchema.find((error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
})

const updateBook = ((req, res, next) => {
    bookSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        (error, data) => {
          if (error) {
            return next(error);
            console.log(error);
          } else {
            res.json(data);
            console.log("Book updated successfully !");
          }
        }
      );
})

const deleteBook = ((req, res, next) => {
    bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data,
          });
        }
      });
})

module.exports = {
    createBook,
    getBook,
    getBooks,
    updateBook,
    deleteBook
}