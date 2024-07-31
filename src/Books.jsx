// Books.js
import React, { useState } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';

const Books = () => {
  const getRandomDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * days));
    return date.toISOString().split('T')[0];
  };

  const initialBooks = [
    { title: 'The Mysterious Manuscript', author: 'John', dueDate: getRandomDate(30), status: 'Checked Out' },
    { title: 'Whispers of the Wilderness', author: 'Jane', dueDate: '', status: 'Available' },
    { title: 'Game Of Thrones', author: 'Mike', dueDate: getRandomDate(30), status: 'Checked Out' },
    { title: 'House of the Dragon', author: 'Lisa', dueDate: '', status: 'Available' },
    { title: 'Harry Potter', author: 'John', dueDate: getRandomDate(30), status: 'Checked Out' },
    { title: 'Winters Tide', author: 'Jane', dueDate: '', status: 'Available' },
    { title: 'To Kill a Mockingbird', author: 'Mike', dueDate: getRandomDate(30), status: 'Checked Out' },
    { title: 'The Catcher in the Rye', author: 'Lisa', dueDate: '', status: 'Available' },
    { title: 'The Lord of the Rings', author: 'John', dueDate: getRandomDate(30), status: 'Checked Out' },
    { title: 'The Alchemist', author: 'Jane', dueDate: '', status: 'Available' },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const toggleStatus = (index) => {
    setBooks(prevBooks => {
      const updatedBooks = prevBooks.map((book, i) =>
        i === index ? { ...book, status: book.status === 'Checked Out' ? 'Available' : 'Checked Out' } : book
      );
      setFilteredBooks(updatedBooks);
      return updatedBooks;
    });
  };

  return (
    <div className="container">
      <h2>Books List</h2>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <div className="card-container">
        {filteredBooks.map((book, index) => (
          <Book key={index} index={index} book={book} toggleStatus={toggleStatus} />
        ))}
      </div>
    </div>
  );
};

export default Books;
