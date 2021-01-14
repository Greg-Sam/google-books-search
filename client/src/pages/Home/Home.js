import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import BookAPI from '../../utils/BookAPI'
import Form from '../../components/Form'
import Book from '../../components/Book'

const {
  getBook,
  saveBook
} = BookAPI

const Home = () => {

  const [bookState, setBookState] = useState({
    search: '',
    book: []
  })

  const handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  const handleSearchOMDB = event => {
    event.preventDefault()
    getBook(bookState.search)
      .then(({ data: book }) => {
        setBookState({ ...bookState, book, search: '' })
      })
      .catch(err => console.error(err))
  }

  const handleSaveBook = imdbID => {
    const newBook = bookState.book.filter(x => x.imdbID === imdbID)[0]
    saveBook(newBook)
      .then(() => {
        let book = JSON.parse(JSON.stringify(bookState.book))
        book = book.filter(x => x.imdbID !== imdbID)
        setBookState({ ...bookState, book })
      })
  }

  return (
    <>
      <hr />
      <Typography variant="h6">
        Search and Save Books
      </Typography>
      <Form
        search={bookState.search}
        handleInputChange={handleInputChange}
        handleSearchOMDB={handleSearchOMDB} />
        {
          bookState.book.length ? 
          bookState.book.map(book => (
            <book
              key={book.imdbID}
              book={book}
              saved={false}
              handleBtnClick={handleSaveBook} />
          )) : null
        }
    </>
  )
}

export default Home
