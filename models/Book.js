const { model, Schema } = require('mongoose')

module.exports = model('Book', new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String,
  gBookId: String
}))
