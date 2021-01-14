import axios from 'axios'

const BookAPI = {
  getMedia: search => axios.get(`/api/omdb/${search}`),
  getSavedMedia: () => axios.get('/api/media'),
  saveMedia: media => axios.post('/api/media', media),
  deleteMedia: id => axios.delete(`/api/media/${id}`) 
}

export default BookAPI
