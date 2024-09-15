import React, { useState } from 'react';
import axios from 'axios';

function EditBook({ book, onUpdate, onClose }) {
  const [updatedBook, setUpdatedBook] = useState({ title: book.name, author: book.author });

  const editBook = () => {
    axios.put(`http://localhost:3000/books/${book._id}`, { name: updatedBook.title, author: updatedBook.author })
      .then(() => {
        onUpdate(book._id, updatedBook); // Atualiza a lista de livros
        onClose();  // Fecha o modal
      })
      .catch(error => console.error('Erro ao atualizar o livro:', error));
  };

  return (
    <div className="modal">
      <h2>Editar Livro</h2>
      <input
        type="text"
        placeholder="Título"
        value={updatedBook.title}
        onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Autor"
        value={updatedBook.author}
        onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
      />
      <button onClick={editBook} className="btn btn-primary">Salvar</button>
      <button onClick={onClose} className="btn btn-secondary">Cancelar</button>
    </div>
  );
}

export default EditBook;
