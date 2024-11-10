import React, { useState } from 'react';
import axios from 'axios';
import '../SearchBar/SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState(''); // State to store search input

  const handleSearch = async () => {
    try {
      // Send the query as JSON to the Flask backend
      const response = await axios.post('http://127.0.0.1:5000/search', {
        query: query,
      });

      console.log('Response from Flask:', response.data); // Log the Flask response
    } catch (error) {
      console.error('Error sending query to Flask:', error);
    }
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="header-outline flex flex-col sm:flex-row justify-between items-center p-3 rounded-full shadow-2xl max-w-screen-lg w-full mx-4 mt-4">
        <input
          type="text"
          placeholder="Search"
          className="text-white bg-transparent w-full outline-none placeholder-white placeholder-opacity-50"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update the state on input change
        />
        <button
          className="ml-4 p-2 text-white bg-blue-500 rounded-full"
          onClick={handleSearch} // Trigger the search when the button is clicked
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;