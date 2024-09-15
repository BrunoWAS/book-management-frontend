import React from 'react';

function DeleteBook({ book, onDelete, onClose }) {
  const deleteBook = () => {
    onDelete(book._id);  // Deleta o livro e fecha o modal
  };

  return (
    <div className="modal">
      <h2>Tem certeza que deseja excluir o livro "{book?.name}"?</h2>
      <button onClick={deleteBook} className="btn btn-danger">Sim, excluir</button>
      <button onClick={onClose} className="btn btn-secondary">Cancelar</button>
    </div>
  );
}

export default DeleteBook;
