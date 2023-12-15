import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { toast } from 'react-toastify';

function MedicalConditionsList() {
  const [symptoms, setSymptoms] = useState('');
  const [medicalConditions, setMedicalConditions] = useState([]);

  const generateConditions = () => {
    // Logic to process entered symptoms and generate possible medical conditions
    // Use symptoms state to access entered symptoms and generate conditions accordingly
    // Replace the example conditions with actual generated conditions based on symptoms
    const generatedConditions = [
      'Common Cold',
      'Influenza',
      'Allergies',
      // Add more conditions if available
    ];
    setMedicalConditions(generatedConditions);
  };

  const onChange = (e) => {
    e.persist();
    setSymptoms(e.target.value);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Generate Possible Medical Conditions</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={8}>
                <Form.Control as="textarea" rows={3} placeholder="Enter symptoms separated by commas" value={symptoms} onChange={onChange} />
              </CCol>
              <CCol xs={4}>
                <Button variant="primary" onClick={generateConditions}>Generate</Button>
              </CCol>
            </CRow>
            <hr />
            <h5>Possible Medical Conditions:</h5>
            <ul>
              {medicalConditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default MedicalConditionsList;
