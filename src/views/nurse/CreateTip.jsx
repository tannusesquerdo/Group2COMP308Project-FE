import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CREATE_TIP } from "../../graphql/mutations";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormTextarea,
  CFormInput,
} from "@coreui/react";
import Button from "react-bootstrap/Button";

function CreateTip() {
  const navigate = useNavigate();
  const [tip, setTip] = useState({
    title: "",
    description: "",
  });
  const [createTip, { loading, error }] = useMutation(CREATE_TIP);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    createTip({
      variables: {
        title: tip.title,
        description: tip.description,
      },
    });

    setTip({
      title: "",
      description: "",
    });

    toast.success("Tip created successfully");
    navigate("/tips");
  };

  const onChange = (e) => {
    setTip({ ...tip, [e.target.name]: e.target.value });
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create Tip</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="title">Title</CFormLabel>
                <CFormInput
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter Title"
                  value={tip.title}
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="description">Description</CFormLabel>
                <CFormTextarea
                  as="textarea"
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                  value={tip.description}
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
}

export default CreateTip;
