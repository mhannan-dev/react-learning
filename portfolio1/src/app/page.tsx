"use client";

import React, { useState } from 'react';
import FilterButtons from './components/PROJECT/FilterButtons';
import Navbar from './components/NAVBAR/Navbar';
import Banner from './components/BANNER/Banner';
import Testimonial from './components/TESTIMONIAL/Testimonial';

const Home = () => {
  const [filter, setFilter] = useState<string>('All');
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="container-lg mx-auto">
      <Navbar />
      <Banner />
      <Testimonial />
      <FilterButtons
        filterOptions={['All', 'React', 'Laravel', 'Vue']}
        onFilterChange={handleFilterChange}
      />
      <ContentInfo filter={filter} />
    </div>
  );
};

interface ContentInfoProps {
  filter: string;
}

const ContentInfo: React.FC<ContentInfoProps> = ({ filter }) => ( 
  <div className='text-center'>
    Content filtered by: <strong>{filter}</strong>
  </div>
);

export default Home;

