import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface CategoryButtonsProps {
  filterOptions: string[];
  onFilterChange: (filter: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ filterOptions, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full md:w-1/2 px-4 pb-8 md:pb-0">
        <h2 className="text-2xl font-bold mb-4 pb-8 text-center border-b-2 border-gray-400">PROJECTS</h2>
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

CategoryButtons.propTypes = {
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default CategoryButtons;
