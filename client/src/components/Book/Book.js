import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

const Book = props => {
  const classes = useStyles()
  const {
    book,
    handleSaveBook,
    handleBtnClick
  } = props

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={book.image}
        title={book.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Authors: {book.authors}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Description: {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        {
          saved ? (
            <Button
              size="small"
              color="secondary"
              onClick={() => handleBtnClick(book._id)}>
              Delete
            </Button>
          ) : (
              <Button
                size="small"
                color="primary"
                onClick={() => handleBtnClick(book.imdbID)}>
                Save
              </Button>
            )
        }

      </CardActions>
    </Card >
  )
}

export default Book
