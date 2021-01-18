const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/book/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data: { items } }) => {
      console.log(items)
      items.map(book => ({
        title: items.volumeInfo.title,
        authors: items.volumeInfo.authors,
        description: items.volumeInfo.description,
        image: items.volumeInfo.imageLinks.thumbnail,
        link: items.volumeInfo.infoLink,
        gBookId: items.id
      }))
    })
    // .then(items => Book.find()
    //   .then(books => items.filter(data => books.every(dbData.gBookId !== data.id))))
    // .then(books => res.json(books))
    .catch(err => console.log(err))
})


module.exports = router
