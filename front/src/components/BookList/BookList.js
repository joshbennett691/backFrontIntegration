import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default class BookList extends Component {

  constructor(props){
    super(props)

    this.state = {
      books: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:4000/books')
      .then(res=>{
        this.setState({
          books: res.data
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Isbn</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Pages</th>
          </tr>
        </thead>
        <tbody>
          {(this.state.books.length > 0) ? this.state.books.map((book, index) => {
            return(
              <tr key={index}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishedDate}</td>
                <td>{book.pages}</td>
              </tr>
            )
          }) : <tr><td colSpan="10">Loading...</td></tr>}
        </tbody>
      </table>
    )
  }
 
}
