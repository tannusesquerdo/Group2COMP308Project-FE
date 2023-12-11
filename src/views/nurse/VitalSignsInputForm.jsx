/**
 * Last Modified by Harpreet Kaur on 12/10/2023
 * Component: VitalSignsInputForm
 * Responsible for allowing nurses to input vital signs data as per model
 * This form includes all the input fields in form as per model.
 * Props: 
 *  - onSubmit: Function to handle form submission and data storage.
 */

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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CFormLabel } from '@coreui/react';
import { toast } from 'react-toastify';

function VitalSignsInputForm({ patientId }) {
  const [vitals, setVitals] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
    num: '',
    updateDate: new Date(),
    patient: patientId,
  });

  const saveVitalSigns = async (e) => {
    e.preventDefault();
    // Logic to handle saving vital signs to the database
    toast.success('Vital signs recorded successfully');
    // Additional logic for saving data to the database
  };

  const handleChange = (e) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setVitals({ ...vitals, updateDate: date });
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
              {/* Age */}
              <div className="mb-3">
                <CFormLabel htmlFor='age'>Age</CFormLabel>
                <Form.Control type="number" name="age" id="age" placeholder="Enter Age" value={vitals.age} onChange={handleChange} />
              </div>

              {/* Sex */}
              <div className="mb-3">
                <CFormLabel htmlFor='sex'>Sex (1 = Male, 0 = Female)</CFormLabel>
                <Form.Control as="select" name="sex" id="sex" value={vitals.sex} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </Form.Control>
              </div>

              {/* Chest Pain (cp) */}
              <div className="mb-3">
                <CFormLabel htmlFor='cp'>Chest Pain Type</CFormLabel>
                <Form.Control as="select" name="cp" id="cp" value={vitals.cp} onChange={handleChange}>
                  <option value="">Select Type</option>
                  <option value="1">Typical Angina</option>
                  <option value="2">Atypical Angina</option>
                  <option value="3">Non-Anginal Pain</option>
                  <option value="4">Asymptomatic</option>
                </Form.Control>
              </div>

              {/* Resting Blood Pressure (trestbps) */}
              <div className="mb-3">
                <CFormLabel htmlFor='trestbps'>Resting Blood Pressure</CFormLabel>
                <Form.Control type="number" name="trestbps" id="trestbps" placeholder="Enter Resting Blood Pressure" value={vitals.trestbps} onChange={handleChange} />
              </div>

              {/* Cholesterol (chol) */}
              <div className="mb-3">
                <CFormLabel htmlFor='chol'>Cholesterol</CFormLabel>
                <Form.Control type="number" name="chol" id="chol" placeholder="Enter Cholesterol" value={vitals.chol} onChange={handleChange} />
              </div>

              {/* Fasting Blood Sugar (fbs) */}
              <div className="mb-3">
                <CFormLabel htmlFor='fbs'>Fasting Blood Sugar ( 120 mg/dl)</CFormLabel>
                <Form.Control as="select" name="fbs" id="fbs" value={vitals.fbs} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </Form.Control>
              </div>

              {/* Resting Electrocardiographic Results (restecg) */}
              <div className="mb-3">
                <CFormLabel htmlFor='restecg'>Resting Electrocardiographic Results</CFormLabel>
                <Form.Control as="select" name="restecg" id="restecg" value={vitals.restecg} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="0">Normal</option>
                  <option value="1">ST-T Wave Abnormality</option>
                  <option value="2">Left Ventricular Hypertrophy</option>
                </Form.Control>
              </div>

              {/* Maximum Heart Rate Achieved (thalach) */}
              <div className="mb-3">
                <CFormLabel htmlFor='thalach'>Maximum Heart Rate Achieved</CFormLabel>
                <Form.Control type="number" name="thalach" id="thalach" placeholder="Enter Maximum Heart Rate Achieved" value={vitals.thalach} onChange={handleChange} />
              </div>

              {/* Exercise Induced Angina (exang) */}
              <div className="mb-3">
                <CFormLabel htmlFor='exang'>Exercise Induced Angina</CFormLabel>
                <Form.Control as="select" name="exang" id="exang" value={vitals.exang} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Form.Control>
              </div>

              {/* ST Depression (oldpeak) */}
              <div className="mb-3">
                <CFormLabel htmlFor='oldpeak'>ST Depression Induced by Exercise Relative to Rest</CFormLabel>
                <Form.Control type="number" name="oldpeak" id="oldpeak" placeholder="Enter ST Depression" value={vitals.oldpeak} onChange={handleChange} />
              </div>

              {/* Slope of the Peak Exercise ST Segment (slope) */}
              <div className="mb-3">
                <CFormLabel htmlFor='slope'>The Slope of the Peak Exercise ST Segment</CFormLabel>
                <Form.Control as="select" name="slope" id="slope" value={vitals.slope} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="1">Upsloping</option>
                  <option value="2">Flat</option>
                  <option value="3">Downsloping</option>
                </Form.Control>
              </div>

              {/* Number of Major Vessels (ca) */}
              <div className="mb-3">
                <CFormLabel htmlFor='ca'>Number of Major Vessels Colored by Fluoroscopy</CFormLabel>
                <Form.Control type="number" name="ca" id="ca" placeholder="Enter Number of Major Vessels" value={vitals.ca} onChange={handleChange} />
              </div>

              {/* Thalassemia (thal) */}
              <div className="mb-3">
                <CFormLabel htmlFor='thal'>Thalassemia</CFormLabel>
                <Form.Control as="select" name="thal" id="thal" value={vitals.thal} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="3">Normal</option>
                  <option value="6">Fixed Defect</option>
                  <option value="7">Reversible Defect</option>
                </Form.Control>
              </div>

              {/* Update Date */}
              <div className="mb-3">
                <CFormLabel htmlFor='updateDate'>Update Date</CFormLabel>
                <DatePicker selected={vitals.updateDate} onChange={handleDateChange} className="form-control" />
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
