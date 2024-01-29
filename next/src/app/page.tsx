"use client";
import React, { useState } from 'react';
import uuid from 'react-uuid';
import CategoryButtons from './components/PROJECT/Category';
import Navbar from './components/NAVBAR/Navbar';
import Banner from './components/BANNER/Banner';
import Testimonial from './components/TESTIMONIAL/Testimonial';
import Card from './components/PROJECT/List';

const cardsData = [
  { title: 'Card 1', category: 'React', image: 'https://fakeimg.pl/300x300/d41b90/302929', description: 'Tempor incididunt ut labore et dolore magna aliqua. 1.' },
  { title: 'Card 2', category: 'Laravel', image: 'https://fakeimg.pl/300x300/1966cc/909090', description: 'Short description for Card 2.' },
  { title: 'Card 3', category: 'Vue', image: 'https://fakeimg.pl/300x300/d41b90/225af2', description: 'Short description for Card 3.' },
  { title: 'Card 4', category: 'React', image: 'https://fakeimg.pl/300x300/1966cc/909090', description: 'Short description for Card 4.' },
  { title: 'Card 5', category: 'Vue', image: 'https://fakeimg.pl/300x300/d41b90/225af2', description: 'Short description for Card 5.' }, { title: 'Card 3', category: 'Vue', image: 'https://fakeimg.pl/300x300/d41b90/225af2', description: 'Short description for Card 3.' },
  { title: 'Card 4', category: 'React', image: 'https://fakeimg.pl/300x300/1966cc/909090', description: 'Short description for Card 4.' },
  { title: 'Card 5', category: 'Vue', image: 'https://fakeimg.pl/300x300/d41b90/225af2', description: 'Short description for Card 5.' },
];

const Home: React.FC = () => {
  const [filter, setFilter] = useState < string > ('All');
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const filteredCards = filter === 'All' ? cardsData : cardsData.filter(card => card.category === filter);

  return (
    <div className="container-lg mx-auto">
      <Navbar />
      <Banner />
      <Testimonial />
      <CategoryButtons
        filterOptions={['All', 'React', 'Laravel', 'Vue']}
        onFilterChange={handleFilterChange}
      />
      <div className="container mx-auto flex flex-wrap justify-center">
        {filteredCards.map((card, index) => (
          <Card key={uuid} title={card.title} category={card.category} image={card.image} description={card.description} />
        ))}
      </div>
    </div>
  );
};
export default Home;
