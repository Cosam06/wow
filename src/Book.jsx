// Book.js
import React from 'react';

const Book = ({ index, book, toggleStatus }) => (
  <div className="card">
    <div className="card-header">{book.title}</div>
    <div className="card-body">
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Due Date:</strong> {book.status === 'Checked Out' ? book.dueDate : 'N/A'}</p>
      <p><strong>Status:</strong> {book.status}</p>
    </div>
    <div className="card-footer">
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </div>
  </div>
);

export default Book;
