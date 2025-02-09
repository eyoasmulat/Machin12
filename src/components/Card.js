import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="card-link">
        Learn More
      </Link>
    </div>
  );
};

export default Card;