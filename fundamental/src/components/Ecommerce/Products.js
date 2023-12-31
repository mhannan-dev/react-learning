// Products.js

import React, { useState, useEffect } from 'react';
import ProductSingle from './ProductSingle';

const Products = ({ selectedCategoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${selectedCategoryId}`);
      const data = await response.json();
      setProducts(data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategoryId !== null) {
      fetchData();
    }
  }, [selectedCategoryId]);

  return (
    <div className="row text-center py-3">
      {
        products.map((product, index) => (
          <ProductSingle key={index} product={product} />
        ))
      }
    </div>
  );
};

export default Products;
