import axios from 'axios'

const BookAPI = {
  getBooks: search => axios.get(`/api/book/${search}`),
  getSavedbooks: () => axios.get('/api/books'),
  savebook: books => axios.post('/api/book', books),
  deletebook: id => axios.delete(`/api/book/${id}`) 
}

export default BookAPI
