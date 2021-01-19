const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/gbook/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data: { items } }) => items.map(book => ({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      gBookId: book.id
    })))
    .then(apiBooks => Book.find()
    // .then(books => res.json(books))
      .then(books => apiBooks.filter(data => books.every(dbData => dbData.gBookId !== data.gBookId))))
    .then(books => res.json(books))
    .catch(err => console.log(err))
})


module.exports = router
