import React, { useState } from 'react';
import axios from 'axios';

function AddBook({ onAdd, onClose }) {
  const [newBook, setNewBook] = useState({ name: '', author: '' });

  const addBook = () => {
    if (!newBook.name || !newBook.author) {
      console.error("Nome e autor são obrigatórios.");
      return;
    }

    const bookToAdd = { ...newBook, publisher: 'unknown' };

    axios.post('http://localhost:3000/books', bookToAdd)
      .then(response => {
        onAdd(response.data); // Atualiza a lista de livros
        setNewBook({ name: '', author: '' });
        onClose();  // Fecha o modal
      })
      .catch(error => console.error('Erro ao adicionar o livro:', error));
  };

  return (
    <div className="modal">
      <h2>Adicionar Novo Livro</h2>
      <input
        type="text"
        placeholder="Título"
        value={newBook.name}
        onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Autor"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button onClick={addBook} className="btn btn-primary">Adicionar</button>
      <button onClick={onClose} className="btn btn-secondary">Cancelar</button>
    </div>
  );
}

export default AddBook;
