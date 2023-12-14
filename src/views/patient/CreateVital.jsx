import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import { CREATE_DAILY_VITALS } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
} from "@coreui/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateDailyVital = () => {
  const navigate = useNavigate();
  const [dailyVital, setDailyVital] = useState({
    pulseRate: "",
    bloodPressure: "",
    weight: "",
    temperature: "",
    respRate: "",
    updateDate: "",
    patientId: "",
  });
  const [createDailyVital, { loading, error }] =
    useMutation(CREATE_DAILY_VITALS);

  if (loading) return <Spinner animation="border" />;
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    createDailyVital({
      variables: {
        pulseRate: parseFloat(dailyVital.pulseRate),
        bloodPressure: parseFloat(dailyVital.bloodPressure),
        weight: parseFloat(dailyVital.weight),
        temperature: parseFloat(dailyVital.temperature),
        respRate: parseFloat(dailyVital.respRate),
        updateDate: new Date(dailyVital.updateDate),
        patientId: dailyVital.patientId,
      },
    });

    setDailyVital({
      pulseRate: "",
      bloodPressure: "",
      weight: "",
      temperature: "",
      respRate: "",
      updateDate: "",
      patientId: "",
    });

    toast.success("Daily vital recorded successfully");
    navigate("/");
  };

  const onChange = (e) => {
    setDailyVital({ ...dailyVital, [e.target.name]: e.target.value });
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Record Daily Vital</strong>
            <h1>THIS IS A BUGGGG</h1>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="pulseRate">Pulse Rate</CFormLabel>
                <Form.Control
                  type="number"
                  name="pulseRate"
                  id="pulseRate"
                  placeholder="Enter Pulse Rate"
                  value={dailyVital.pulseRate}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="bloodPressure">Blood Pressure</CFormLabel>
                <Form.Control
                  type="number"
                  name="bloodPressure"
                  id="bloodPressure"
                  placeholder="Enter Blood Pressure"
                  value={dailyVital.bloodPressure}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="weight">Weight</CFormLabel>
                <Form.Control
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="Enter Weight"
                  value={dailyVital.weight}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="temperature">Temperature</CFormLabel>
                <Form.Control
                  type="number"
                  name="temperature"
                  id="temperature"
                  placeholder="Enter Temperature"
                  value={dailyVital.temperature}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="respRate">Respiratory Rate</CFormLabel>
                <Form.Control
                  type="number"
                  name="respRate"
                  id="respRate"
                  placeholder="Enter Respiratory Rate"
                  value={dailyVital.respRate}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="updateDate">Update Date</CFormLabel>
                <Form.Control
                  type="date"
                  name="updateDate"
                  id="updateDate"
                  value={dailyVital.updateDate}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="patientId">Patient ID</CFormLabel>
                <Form.Control
                  type="text"
                  name="patientId"
                  id="patientId"
                  placeholder="Enter Patient ID"
                  value={dailyVital.patientId}
                  onChange={onChange}
                />
              </div>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateDailyVital;
