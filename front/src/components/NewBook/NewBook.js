import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default class NewBook extends Component {


  constructor(props){
    super(props)

    //setting up functions
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeIsbn = this.onChangeIsbn.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePublishedDate = this.onChangePublishedDate.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  //setting up state
  this.state = {
    title: '',
    isbn: '',
    author: '',
    publishedDate: '',
    pages: '',
  }
}

onChangeTitle(e){
  this.setState({title: e.target.value})
}

onChangeIsbn(e){
  this.setState({isbn: e.target.value})
}

onChangeAuthor(e){
  this.setState({author: e.target.value})
}

onChangePublishedDate(e){
  this.setState({publishedDate: e.target.value})
}

onChangePages(e){
  this.setState({pages: e.target.value})
}

onSubmit(e){
  console.log('click detected')
  e.preventDefault()
  
  const bookObject = {
    title: this.state.title,
    isbn: this.state.isbn,
    author: this.state.author,
    publishedDate: this.state.publishedDate,
    pages: this.state.pages
  };

  console.log(bookObject);
  axios.post('http://localhost:4000/books/create-book', bookObject)
    .then(res => console.log(res.data));

    this.setState({title: '', isbn: '', author: '', publishedDate: '', pages: '',})
}


  render(){
    return (
      <div>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 3, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
    <h3>Register a Book</h3>
      <TextField
        required
        label="Title"
        value={this.state.title}
        onChange={this.onChangeTitle}
      />
      <TextField
        required
        label="Isbn"
        value={this.state.isbn}
        onChange={this.onChangeIsbn}
      />
      <TextField
        required
        label="Author"
        value={this.state.author}
        onChange={this.onChangeAuthor}
      />
      <TextField
        required
        label="PublishedDate"
        value={this.state.publishedDate}
        onChange={this.onChangePublishedDate}
      />
      <TextField
        required
        label="pages"
        value={this.state.pages}
        onChange={this.onChangePages}
      />

      </div>
      </Box>
        <Button variant="contained" size="large" onClick={this.onSubmit}>
          Register
        </Button>
      </div>
  );
  }
  
}
