import React, { useState } from 'react';

const SearchFilter = ({ books, setFilteredBooks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchFilter;
