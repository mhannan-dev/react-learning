// FilterButtons.js
import React, { useState } from 'react';

const FilterButtons = ({ filterOptions, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full md:w-1/2 px-4 pb-8 md:pb-0">
        <h2 className="text-2xl font-bold mb-4 pb-8 text-center">PROJECTS</h2>
        <div className="flex justify-center">
          {filterOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleFilterChange(option)}
              className={`mr-4 mb-4 py-2 px-4 rounded ${
                selectedFilter === option ? 'bg-lightblue' : 'bg-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
