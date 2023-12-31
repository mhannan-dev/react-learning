import React from 'react'
import Categories from './Categories'
import Header from './Header'
import Products from './Products'
import StaticBanner from './StaticBanner'


const Home = () => {
  return (
    <div className='container'>
      <Header/>
      <Categories/>
      <Products/>
    </div>
  )
}
export default Home
