import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 container-lg mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 px-4 pb-8 md:pb-0">
        <h6 className="text-2xl font-bold text-gray-800 mb-4">FULLSTACK WEB DEVELOPER</h6>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Muhammad Hannan</h1>
        <p className="text-lg text-gray-600 mb-4">I am a full-stack web developer from Dhaka, Bangladesh. Skilled in JavaScript, PHP, database design, API development, and third-party payment gateway integration.</p>
        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Portfolio Button */}
          <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 rounded-full shadow hover:from-pink-600 hover:to-pink-700 transition duration-300 ease-in-out">Portfolio</button>
          {/* Contact Me Button */}
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out">Contact Me</button>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/2 px-4 relative overflow-hidden">
        <img
          className="object-cover w-full h-auto transition-all duration-500 transform hover:scale-105"
          src="/banner.png"
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
