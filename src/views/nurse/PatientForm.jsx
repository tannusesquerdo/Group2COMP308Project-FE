import { useMutation } from "@apollo/client";
import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from "@coreui/react";
import React, { useState } from "react";
import { ADD_USER } from "../../graphql/mutations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    roles: ["Patient"],
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
  });

  const [createUser, { loading, error }] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const response = await createUser({ variables: { ...formData } });
      const {
        data: {
          createNewUser: { data, message, status },
        },
      } = response;

      if (status === "success") {
        toast.success(message);
        navigate("/nurse/patients");
      }
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <div className="mb-3 sm:w-6/12 px-3">
          <CFormLabel htmlFor="firstName">First Name</CFormLabel>
          <CFormInput
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3 sm:w-6/12 px-3">
          <CFormLabel htmlFor="lastName">First Name</CFormLabel>
          <CFormInput
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="mb-3 px-3">
        <CFormLabel htmlFor="email">Email</CFormLabel>
        <CFormInput
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="flex flex-row">
        <div className="mb-3 sm:w-6/12 px-3">
          <CFormLabel htmlFor="gender">Gender</CFormLabel>
          <CFormSelect
            name="gender"
            value={formData.gender}
            aria-label="select gender"
            onChange={onChange}
            required
            options={[
              "Select Gender",
              { label: "Male", value: "0" },
              { label: "Female", value: "1" },
            ]}
          />
        </div>
        <div className="mb-3 sm:w-6/12 px-3">
          <CFormLabel htmlFor="dob">Date of Birth</CFormLabel>
          <CFormInput
            type="date"
            name="dob"
            id="dob"
            placeholder="Enter Date of Birth"
            value={formData.dob}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3 sm:w-6/12 px-3">
          <CFormLabel htmlFor="password">Password</CFormLabel>
          <CFormInput
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="px-3 mt-4">
        <CButton type="submit" disabled={loading}>
          Submit
        </CButton>
      </div>
    </CForm>
  );
};

export default PatientForm;
