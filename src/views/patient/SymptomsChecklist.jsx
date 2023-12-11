/**
 * Last Modified by Harpreet Kaur on 12/04/2023
 * Component: SymptomsChecklist
 * Allows users to check off common signs and symptoms (COVID-19 or RSV for example).
 * Users can submit their symptom choices which are stored in the database for immediate viewing by doctors.
 * Props: 
 *  - saveSymptomChoices: Function to handle saving of symptom choices to the database.
 */
import React, { useState } from 'react';

const SymptomsChecklist = () => {
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    fatigue: false,
    lossOfTasteOrSmell: false,
    difficultyBreathing: false
  });

  const handleChange = (e) => {
    setSymptoms({ ...symptoms, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here, for example:
    // fetch('/api/submit-symptoms', { method: 'POST', body: JSON.stringify(symptoms), ... })
    console.log(symptoms);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">COVID-19/RSV Symptoms Checklist</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(symptoms).map((symptom) => (
          <div key={symptom} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name={symptom}
              checked={symptoms[symptom]}
              onChange={handleChange}
              id={symptom}
            />
            <label className="form-check-label" htmlFor={symptom}>
              {symptom.charAt(0).toUpperCase() + symptom.slice(1).replace(/([A-Z])/g, ' $1').trim()}
            </label>
          </div>
        ))}
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Submit Symptoms
        </button>
      </form>
    </div>
  );
};

export default SymptomsChecklist;
