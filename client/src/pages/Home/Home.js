import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import BookAPI from '../../utils/BookAPI'
import Form from '../../components/Form'
import Book from '../../components/Book'

const {
  getBooks,
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

  const handleSearchGBooks = event => {
    event.preventDefault()
    getBooks(bookState.search)
      .then(({ data: book }) => {
        setBookState({ ...bookState, book, search: '' })
      })
      .catch(err => console.error(err))
  }

  

  const handleSaveBook = gBookId => {
    const newBook = bookState.book.filter(x => x.gBookId === gBookId)[0]
    saveBook(newBook)
      .then(() => {
        let book = JSON.parse(JSON.stringify(bookState.book))
        book = book.filter(x => x.gBookId !== gBookId)
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
        handleSearchGBooks={handleSearchGBooks}
      />
        {
          bookState.book.length ? 
          bookState.book.map(book => (
            <Book
              key={book.gBookId}
              book={book}
              saved={false}
              handleBtnClick={handleSaveBook} />
          )) 
          : null
        }
    </>
  )
}

export default Home
