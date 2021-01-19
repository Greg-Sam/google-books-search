import axios from 'axios'

const BookAPI = {
  getBooks: search => axios.get(`/api/gbooks/${search}`),
  getSavedbooks: () => axios.get('/api/books'),
  saveBook: book => axios.post('/api/book', book),
  deleteBook: id => axios.delete(`/api/book/${id}`) 
}

export default BookAPI
