import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sports Injury Predictor</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/predict">Predict</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;