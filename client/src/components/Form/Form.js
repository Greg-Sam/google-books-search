import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const Form = props => {
  const {
    search,
    handleInputChange,
    handleSearchGBooks
  } = props

  return (
    <form onSubmit={handleSearchGBooks}>
      <TextField
        label="Search"
        variant="outlined"
        name="search"
        value={search}
        onChange={handleInputChange} />
      <p>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={handleSearchGBooks}>
          Search
        </Button>
      </p>
    </form>
  )
}

export default Form
