import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddBook from './AddBook';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleAdd = (newBook) => {
    setBooks([...books, newBook]);
    axios.get('http://localhost:3000/books')
    .then(response => setBooks(response.data))
    .catch(error => console.log(error));
  };

  const handleUpdate = (id, updatedBook) => {
    setBooks(books.map(book => book._id === id ? { ...book, name: updatedBook.title, author: updatedBook.author } : book));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setBooks(books.filter(book => book._id !== id));
        setShowDeleteModal(false);  // Fecha o modal
      })
      .catch(error => console.error('Erro ao excluir o livro:', error));
  };

  return (
    <div className="container">
      <h2>Books List</h2>
      <button onClick={() => setShowAddModal(true)} className="btn btn-primary">Add Book</button>
      <ul className="list-group">
        {books.map(book => (
          <li key={book._id} className="list-group-item">
            {book.name} by {book.author}
            <button onClick={() => { setSelectedBook(book); setShowEditModal(true); }} className="btn btn-info">Edit</button>
            <button onClick={() => { setSelectedBook(book); setShowDeleteModal(true); }} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>

      {showAddModal && (
        <AddBook
          onAdd={handleAdd}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && (
        <EditBook
          book={selectedBook}
          onUpdate={handleUpdate}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showDeleteModal && (
        <DeleteBook
          book={selectedBook}
          onDelete={handleDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}

export default BookList;
