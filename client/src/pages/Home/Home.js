import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import MediaAPI from '../../utils/MediaAPI'
import Form from '../../components/Form'
import Media from '../../components/Media'

const {
  getMedia,
  saveMedia
} = MediaAPI

const Home = () => {

  const [mediaState, setMediaState] = useState({
    search: '',
    media: []
  })

  const handleInputChange = event => {
    setMediaState({ ...mediaState, [event.target.name]: event.target.value })
  }

  const handleSearchOMDB = event => {
    event.preventDefault()
    getMedia(mediaState.search)
      .then(({ data: media }) => {
        setMediaState({ ...mediaState, media, search: '' })
      })
      .catch(err => console.error(err))
  }

 

  return (
    <>
      <hr />
      <Typography variant="h6">
        Search for Movies and TV Shows
      </Typography>
      <Form
        search={mediaState.search}
        handleInputChange={handleInputChange}
        handleSearchOMDB={handleSearchOMDB} />
        {
          mediaState.media.length ? 
          mediaState.media.map(media => (
            <Media
              key={media.imdbID}
              media={media}
              saved={false}
              handleBtnClick={handleSaveMedia} />
          )) : null
        }
    </>
  )
}

export default Home
