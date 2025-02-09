import React, { useState } from 'react';
import axios from 'axios';
import './Predict.css'; // Import the CSS file

const Predict = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Training_Hours_per_Week: '',
    Previous_Injuries: '',
    BMI: '',
    Gender: '',
    Sport: '',
  });
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPredictions(null);

    try {
      const response = await axios.post('https://machinlear.onrender.com/predict', formData);
      setPredictions(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className="predict-container">
      <h2>Predict Injury Risk</h2>
      <form onSubmit={handleSubmit} className="predict-form">
        <div className="form-group">
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            id="Age"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            required
            placeholder="Enter your age"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Training_Hours_per_Week">Training Hours per Week</label>
          <input
            type="number"
            id="Training_Hours_per_Week"
            name="Training_Hours_per_Week"
            value={formData.Training_Hours_per_Week}
            onChange={handleChange}
            required
            placeholder="Enter training hours per week"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Previous_Injuries">Previous Injuries</label>
          <input
            type="number"
            id="Previous_Injuries"
            name="Previous_Injuries"
            value={formData.Previous_Injuries}
            onChange={handleChange}
            required
            placeholder="Enter number of previous injuries"
          />
        </div>
        <div className="form-group">
          <label htmlFor="BMI">BMI</label>
          <input
            type="number"
            step="0.1"
            id="BMI"
            name="BMI"
            value={formData.BMI}
            onChange={handleChange}
            required
            placeholder="Enter your BMI"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Gender">Gender</label>
          <select
            id="Gender"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Sport">Sport</label>
          <select
            id="Sport"
            name="Sport"
            value={formData.Sport}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Basketball">Basketball</option>
            <option value="Rugby">Rugby</option>
            <option value="Soccer">Soccer</option>
            <option value="Tennis">Tennis</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Predict</button>
      </form>

      {predictions && (
        <div className="predictions">
          <h3>Predictions:</h3>
          <p>Random Forest Prediction: {predictions["Random Forest Prediction"]}</p>
          <p>KNN Prediction: {predictions["KNN Prediction"]}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Predict;