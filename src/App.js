import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import BookList from './BookList';
import AddBook from './AddBook';
import EditBook from './EditBook';
import './App.css';
import Header from './Header'; // Adicionando o Header

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header incluído */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
