import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, category, image, description }) => (
  <div className="max-w-sm overflow-hidden card flex flex-col items-center p-4 m-2 border border-gray-300 rounded-lg shadow-lg">
    <img className="w-full object-cover mb-4" src={image} alt={title} />
    <div className="font-bold text-xl mb-2">{title}</div>
    <h6 className="mb-2"><strong>Category:</strong> {category}</h6>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
