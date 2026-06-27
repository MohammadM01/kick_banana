import React from 'react';
import './FilterBar.css';

const FilterBar = ({ activeSport, setActiveSport, searchQuery, setSearchQuery }) => {
  const categories = [
    { id: 'all', label: 'All Jerseys' },
    { id: 'football', label: 'Football Jerseys ⚽' },
    { id: 'cricket', label: 'Cricket Jerseys 🏏' },
  ];

  return (
    <div className="filter-bar">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search jerseys (e.g. India, Real Madrid...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-tab ${activeSport === cat.id ? 'active' : ''}`}
            onClick={() => setActiveSport(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
