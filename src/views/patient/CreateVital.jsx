import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import { CREATE_DAILY_VITAL } from "../../graphql/mutations";
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
import useAuth from "../../hooks/useAuth";

const CreateDailyVital = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dailyVital, setDailyVital] = useState({
    pulseRate: "",
    bloodPressure: "",
    weight: "",
    temperature: "",
    respRate: "",
    updateDate: "",
    patient: user._id,
  });
  const [createDailyVital, { loading, error }] =
    useMutation(CREATE_DAILY_VITAL);

  if (loading) return <Spinner animation="border" />;
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    createDailyVital({
      variables: {
        pulseRate: dailyVital.pulseRate,
        bloodPressure: dailyVital.bloodPressure,
        weight: dailyVital.weight,
        temperature: dailyVital.temperature,
        respRate: dailyVital.respRate,
        updateDate: dailyVital.updateDate,
        patient: dailyVital.patient,
      },
    });

    setDailyVital({
      pulseRate: "",
      bloodPressure: "",
      weight: "",
      temperature: "",
      respRate: "",
      updateDate: "",
      patient: "",
    });

    toast.success("Daily vital recorded successfully");
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
