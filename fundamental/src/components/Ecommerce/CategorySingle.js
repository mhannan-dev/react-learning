// CategorySingle.js
import React from 'react';

const CategorySingle = ({ category, onCategorySelect }) => {
  const handleClick = () => {
    onCategorySelect(category.id);
  };

  return (
    <>
      <div className='col-md-2'>
        <button
          type='button'
          className='btn btn-link text-decoration-none'
          onClick={handleClick}
        >
          <img src={category.image} alt={`Category: ${category.title}`} width='150' />
          <h6 className='py-2'>{category.title}</h6>
        </button>
      </div>
    </>
  );
};

export default CategorySingle;
