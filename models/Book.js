const { model, Schema } = require('mongoose')

module.exports = model('Book', new Schema({
  title: String,
  year: Number,
  imdbID: String,
  type: String,
  poster: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isSold: Boolean,
  condition: Array,
  category: Array

}))
