import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Predict from './components/Predict';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </div>
  );
}

export default App;