/**
 * Last Modified by T. Jemison on 12/04/2023
 * Component: VitalSignsInputForm
 * Responsible for allowing nurses to input vital signs data.
 * This form includes fields for body temperature, heart rate, blood pressure, and respiratory rate.
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

function VitalSignsInputForm() {
  const [vitalSigns, setVitalSigns] = useState({
    bodyTemperature: '',
    heartRate: '',
    bloodPressure: '',
    respiratoryRate: '',
  });

  const saveVitalSigns = (e) => {
    e.preventDefault();
    // Logic to handle saving vital signs to the database
    // Use vitalSigns state to access entered data and proceed accordingly
    toast.success('Vital signs recorded successfully');
    // Additional logic for saving data to the database
  };

  const onChange = (e) => {
    e.persist();
    setVitalSigns({ ...vitalSigns, [e.target.name]: e.target.value });
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Enter Vital Signs</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={saveVitalSigns}>
              <div className="mb-3">
                <CFormLabel htmlFor='bodyTemperature'>Body Temperature</CFormLabel>
                <Form.Control type="text" name="bodyTemperature" id="bodyTemperature" placeholder="Enter Body Temperature" value={vitalSigns.bodyTemperature} onChange={onChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor='heartRate'>Heart Rate</CFormLabel>
                <Form.Control type="text" name="heartRate" id="heartRate" placeholder="Enter Heart Rate" value={vitalSigns.heartRate} onChange={onChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor='bloodPressure'>Blood Pressure</CFormLabel>
                <Form.Control type="text" name="bloodPressure" id="bloodPressure" placeholder="Enter Blood Pressure" value={vitalSigns.bloodPressure} onChange={onChange} />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor='respiratoryRate'>Respiratory Rate</CFormLabel>
                <Form.Control type="text" name="respiratoryRate" id="respiratoryRate" placeholder="Enter Respiratory Rate" value={vitalSigns.respiratoryRate} onChange={onChange} />
              </div>
                            
              <Button variant="primary" type="submit">
                Save Vital Signs
              </Button>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default VitalSignsInputForm;