import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import Search from './Search';

const CountryList = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetch('https://restcountries.com/v3.1/all')
                .then((response) => response.json())
                .then((data) => {
                    setCountries(data);
                    setFilteredCountries(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    const handleDelete = (cca3) => {
        setCountries(countries.filter((country) => country.cca3 !== cca3));
        setFilteredCountries(filteredCountries.filter((country) => country.cca3 !== cca3));
    };

    const handleSearch = (searchTerm) => {
        const filtered = countries.filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return (
        <div className="country-list">
            <Search onSearch={handleSearch} />
            {loading ? (
                <p className="text-center text-danger font-weight-bold">Loading...</p>
            ) : (
                <div className="row mt-2">
                    {filteredCountries.map((country, index) => (
                        <CountryCard key={index} country={country} onDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CountryList;
