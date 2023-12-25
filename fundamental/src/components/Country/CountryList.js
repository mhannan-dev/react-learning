import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

const CountryList = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Simulate loading for 2 seconds
        const timeoutId = setTimeout(() => {
            fetch('https://restcountries.com/v3.1/all')
                .then((response) => response.json())
                .then((data) => {
                    setCountries(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="country-list">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="row mt-2">
                    {countries.map((country, index) => (
                        <CountryCard key={index} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CountryList;
