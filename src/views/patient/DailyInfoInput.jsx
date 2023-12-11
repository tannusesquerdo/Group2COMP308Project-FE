/**
 * Last Modified by T. Jemison on 12/04/23
 * Component: DailyInfoInput
 * Responsible for allowing patients to enter daily information.
 * This form includes fields for pulse rate, blood pressure, weight, temperature, and respiratory rate.
 * Props: 
 *  - onSubmit: Function to handle form submission and data storage.
 */

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel
} from '@coreui/react';
import { toast } from 'react-toastify';
// Additional imports needed for this component

function DailyInfoInput() {
  const [dailyInfo, setDailyInfo] = useState({
    pulseRate: '',
    bloodPressure: '',
    weight: '',
    temperature: '',
    respiratoryRate: '',
    // Add more fields as needed
  });

  const saveDailyInfo = (e) => {
    e.preventDefault();
    // Logic to handle saving daily information to the database
    // Use dailyInfo state to access entered data and proceed accordingly
    toast.success('Daily information recorded successfully');
    // Additional logic for saving data to the database
  };

  const onChange = (e) => {
    e.persist();
    setDailyInfo({ ...dailyInfo, [e.target.name]: e.target.value });
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Enter Daily Information</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={saveDailyInfo}>
              <div className="mb-3">
                <CFormLabel htmlFor='pulseRate'>Pulse Rate</CFormLabel>
                <Form.Control type="text" name="pulseRate" id="pulseRate" placeholder="Enter Pulse Rate" value={dailyInfo.pulseRate} onChange={onChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor='bloodPressure'>Blood Pressure</CFormLabel>
                <Form.Control type="text" name="bloodPressure" id="bloodPressure" placeholder="Enter Blood Pressure" value={dailyInfo.bloodPressure} onChange={onChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor='weight'>Weight</CFormLabel>
                <Form.Control type="text" name="weight" id="weight" placeholder="Enter Weight" value={dailyInfo.weight} onChange={onChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor='temperature'>Temperature</CFormLabel>
                <Form.Control type="text" name="temperature" id="temperature" placeholder="Enter Temperature" value={dailyInfo.temperature} onChange={onChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor='respiratoryRate'>Respiratory Rate</CFormLabel>
                <Form.Control type="text" name="respiratoryRate" id="respiratoryRate" placeholder="Enter Respiratory Rate" value={dailyInfo.respiratoryRate} onChange={onChange} />
              </div>
                            
              <Button variant="primary" type="submit">
                Save Daily Information
              </Button>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default DailyInfoInput;
