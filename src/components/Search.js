import React, { useState } from "react";

function Search({ searchTerm, handleSearchChange }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
