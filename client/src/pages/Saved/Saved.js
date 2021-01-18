import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import BookAPI from '../../utils/BookAPI'
import Book from '../../components/Book'

const {
  getSavedBooks,
  deleteBook
} = BookAPI

const Saved = () => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  const handleDeleteSaved = id => {
    deleteBook(id)
      .then(() => {
        const saved = savedState.saved.filter(book => book._id !== id)
        setSavedState({ ...savedState, saved })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getSavedBooks()
      .then(({ data: saved }) => {
        setSavedState({ ...savedState, saved })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <hr />
      <Typography variant="h6">
        Your Saved Books
      </Typography>
      {
        savedState.saved.length ? (
          savedState.saved.map(book => (
            <Book
              key={book._id}
              book={book}
              saved={true}
              handleBtnClick={handleDeleteSaved} />
          ))
        ) : null
      }
    </>
  )
}

export default Saved
