import React from 'react';
import './About.css';
import profileImage from './porti.jpg'; // Adjust the path to your image

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <div className="image-container">
        <img src={profileImage} alt="Dessalegn Mulat" className="profile-image" />
      </div>
      <p>
        This is a sports injury risk prediction tool. It uses machine learning models to predict the risk of injury based on user input.
      </p>
      <p>
        Hi, I'm <strong>Dessalegn Mulat</strong>, a passionate software engineer with expertise in building scalable and efficient web applications. I specialize in full-stack development, machine learning, and cloud technologies. This project is a testament to my dedication to solving real-world problems using technology.
      </p>
    </div>
  );
};

export default About;