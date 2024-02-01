import React, { useState } from 'react';
import Logo from './Logo';
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 sticky top-0 z-10">
      <div className="container-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="/" className="flex items-center text-white text-lg font-bold logo">
          <svg className="h-8 w-8 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          </svg>
          <Logo />
        </a>
        <div className="md:hidden">
          <FaBars onClick={toggleMenu} size={32} className="text-white my-4" />
        </div>
        <div className={`md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
            <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Services</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
          </ul>

          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 border border-slate-300 hover:border-indigo-300">Contact Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
