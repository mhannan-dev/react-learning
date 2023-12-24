import React from "react";
import CountryList from "./CountryList";
import Search from './Search'
const Home = () => {
  return (
    <div className="container-fluid py-2">
      <Search />
      <CountryList />
    </div>
  );
};

export default Home;
