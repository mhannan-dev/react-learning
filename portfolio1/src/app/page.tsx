import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <div className="container-lg mx-auto">
      <Navbar />
      <Banner />
      <Testimonial/>
    </div>
  );
}


