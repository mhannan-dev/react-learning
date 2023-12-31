// Categories.js
import React, { useState, useEffect, setError } from 'react';
import CategorySingle from './CategorySingle';

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/api/category');
    const data = await response.json();
    setCategoriesData(data.items || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='row text-center py-3 d-flex justify-content-center'>
      <>
        {categoriesData.map((category) => (
          <CategorySingle
            key={category.id}
            category={category}
          />
        ))}
      </>
    </div>
  );
};

export default Categories;
