import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    
  },
  book: {
    height: 140,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
})

const Book = props => {
  const classes = useStyles()
  const {
    book,
    saved,
    handleBtnClick,
  
  } = props

  return (
    <>
    <hr/>
    <Card className={classes.root}>
      <CardMedia
        className={classes.book}
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
          
            <Button color="primary"
            href={book.link}>
              More Info</Button>
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
                onClick={() => handleBtnClick(book.gBookId)}>
                Save
              </Button>
            )
            
        }

      </CardActions>
    </Card >
    </>
  )
}

export default Book
