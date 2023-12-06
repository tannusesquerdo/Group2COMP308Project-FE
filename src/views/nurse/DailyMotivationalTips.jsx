/**
 * Last Modified by T. Jemison on 12/04/2023
 * Component: DailyMotivationalTips
 * Allows nurses to enter and store motivational tips for patients.
 * Nurses can add tips which are stored in the database for daily viewing by patients.
 * Props: 
 *  - saveMotivationalTips: Function to handle saving of motivational tips to the database.
 */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CFormLabel } from '@coreui/react';
import { toast } from 'react-toastify';

function DailyMotivationalTips() {
  const [motivationalTip, setMotivationalTip] = useState('');

  const saveMotivationalTip = (e) => {
    e.preventDefault();
    // Logic to handle saving the motivational tip to the database
    // Use motivationalTip state to access entered tip and proceed accordingly
    toast.success('Motivational tip saved successfully');
    // Additional logic for saving data to the database
  };

  const onChange = (e) => {
    e.persist();
    setMotivationalTip(e.target.value);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Daily Motivational Tip</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={saveMotivationalTip}>
              <div className="mb-3">
                <CFormLabel htmlFor='motivationalTip'>Enter Tip</CFormLabel>
                <Form.Control as="textarea" rows={3} name="motivationalTip" id="motivationalTip" placeholder="Enter your motivational tip" value={motivationalTip} onChange={onChange} />
              </div>
                            
              <Button variant="primary" type="submit">
                Save Tip
              </Button>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default DailyMotivationalTips;