import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 sticky top-0 z-10">
      <div className="container-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Brand */}
        <a href="/" className="flex items-center text-white text-lg font-bold logo">
          <svg className="h-8 w-8 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          </svg>
          <Logo />
        </a>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-4">
          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Services</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
          </ul>
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out">Contact Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
