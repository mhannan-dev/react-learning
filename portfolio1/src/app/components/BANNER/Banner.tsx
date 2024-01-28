import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 px-4 pb-8 md:pb-0">
        <h6 className="text-2xl font-bold text-gray-800 mb-4">FULLSTACK WEB DEVELOPER</h6>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Muhammad Hannan</h1>
        <p className="text-lg text-gray-600 mb-4">I am a full-stack web developer from Dhaka, Bangladesh. Skilled in JavaScript, PHP, database design, API development, and third-party payment gateway integration.</p>
        
        {/* Buttons */}
        <div className="flex space-x-4">
          <Button text="Portfolio" gradientFrom="from-fuchsia-600" gradientTo="to-purple-600" hoverFrom="hover:from-pink-600" hoverTo="hover:to-pink-700" />
          <Button text="Contact Me" gradientFrom="from-violet-600" gradientTo="to-indigo-600" hoverFrom="hover:from-blue-600" hoverTo="hover:to-blue-700" />
        </div>
        
        {/* Horizontal Line */}
        <hr className="my-4 banner-hr"/>

        {/* Social Links */}
        <div className="flex space-x-4 items-center">
          <p>Lets Connect</p>
          <SocialLink icon={<FaFacebookSquare size={32} />} />
          <SocialLink icon={<FaLinkedin size={32} />} />
          <SocialLink icon={<FaGithubSquare size={32} />} />
          <SocialLink icon={<FaTwitterSquare size={32} />} />
        </div>
      </div>
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

const Button = ({ text, gradientFrom, gradientTo, hoverFrom, hoverTo }) => (
  <button className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white px-6 py-3 rounded-full shadow ${hoverFrom} ${hoverTo} transition duration-300 ease-in-out`}>
    {text}
  </button>
);

const SocialLink = ({ icon }) => (
  <a href="#">{icon}</a>
);

export default Banner;
