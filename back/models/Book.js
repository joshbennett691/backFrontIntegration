const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  title: {
    type: String
  },
  isbn: {
    type: String
  },
  author: {
    type: String
  },
  publishedDate: {
      type: String
  },
  pages: {
      type: String
  }

}, {
    collection: 'books'
  })

module.exports = mongoose.model('Book', bookSchema)