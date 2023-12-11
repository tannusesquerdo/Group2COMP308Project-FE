/**
 * Last Modified by Harpreet Kaur on 12/04/2023
 * Component: EmergencyAlert
 * Allows users to create and send an emergency alert to first responders.
 * Users can create alerts which are stored in a separate collection in the database for immediate viewing by first responders.
 * Props: 
 *  - saveEmergencyAlert: Function to handle saving of emergency alerts to the database.
 */
import React, { useState } from 'react';

const EmergencyAlert = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    setAlertMessage(e.target.value);
  };

  const sendAlert = async () => {
    try {
      // Replace with actual API endpoint and POST method to send alert
      const response = await fetch('/api/send-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: alertMessage }),
      });

      if (response.ok) {
        console.log('Alert sent successfully!');
        // Handle the UI change or notification to show success message
      } else {
        console.error('Failed to send alert.');
        // Handle the UI change or notification to show error message
      }
    } catch (error) {
      console.error('Error sending alert:', error);
      // Handle the UI change or notification to show error message
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Emergency Alert</h2>
      <div className="form-group">
        <textarea
          className="form-control"
          value={alertMessage}
          onChange={handleInputChange}
          placeholder="Type your emergency alert here..."
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-danger btn-block mt-3" onClick={sendAlert}>
        Send Alert
      </button>
    </div>
  );
};
export default EmergencyAlert;
