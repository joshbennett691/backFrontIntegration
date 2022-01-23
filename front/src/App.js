import './App.css';
import Appbar from './components/Appbar/Appbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Register from './components/Register/Register'
import NewBook from './components/NewBook/NewBook'
import Login from './components/Login/Login'
import UserList from './components/UserList/UserList'
import BookList from './components/BookList/BookList'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
          <Appbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/new-book" element={<NewBook />} />
            <Route path="/books" element={<BookList />} />
          </Routes>
    </div>
    
  );
}

export default App;
