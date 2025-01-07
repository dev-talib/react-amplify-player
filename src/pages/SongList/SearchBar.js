import React from 'react';
import styles from './SearchBar.module.css'; // Import the CSS module

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for a song..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
