import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React from "react";
import PatientForm from "./PatientForm";

const CreatePatient = () => {
  return (
    <CCard>
      <CCardHeader>
        <strong>Add New Patient</strong>
      </CCardHeader>
      <CCardBody>
        <PatientForm />
      </CCardBody>
    </CCard>
  );
};

export default CreatePatient;
