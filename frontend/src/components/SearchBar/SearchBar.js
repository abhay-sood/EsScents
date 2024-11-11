import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/search', { query });
      console.log('Response from Flask:', response.data);
      setQuery('');
    } catch (error) {
      console.error('Error sending query to Flask:', error);
    }
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <ion-icon
          name="search"
          className="search-icon"
          style={{ color: '#ffffff' }}
        ></ion-icon>
        <input
          type="text"
          placeholder="Search EsScents.com"
          className="search-input font-elegant"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter key
        />
      </div>
    </div>
  );
};

export default SearchBar;