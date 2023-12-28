import React, { useState, useEffect } from 'react';
import CategorySingle from './CategorySingle';

const Categories = () => {
    // State to store categories data
    const [categoriesData, setCategoriesData] = useState([]);
    // useEffect to fetch data from the API when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const response = await fetch('http://localhost:8000/api/category');
                const data = await response.json();
                console.log(data.items);
                // Update the state with the fetched data
                setCategoriesData(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts

    return (
        <>
            <div className='row text-center py-3 d-flex justify-content-center'>
                {Array.isArray(categoriesData) && categoriesData.map((category) => (
                    <CategorySingle key={category.id} category={category} />
                ))}
            </div>
        </>
    );
};

export default Categories;
