import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Sports Injury Predictor</h1>
          <p>Stay safe and predict your injury risk with our advanced tools.</p>
          <Link to="/predict" className="hero-button">Get Started</Link>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <h2>Predict Injury Risk</h2>
          <p>Use our advanced machine learning models to predict your injury risk.</p>
          <Link to="/predict" className="card-button">Predict Now</Link>
        </div>
        <div className="card">
          <h2>Learn More</h2>
          <p>Find out more about how our prediction tool works.</p>
          <Link to="/about" className="card-button">About Us</Link>
        </div>
        <div className="card">
          <h2>Contact Us</h2>
          <p>Have questions? Get in touch with our team.</p>
          <Link to="/contact" className="card-button">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;