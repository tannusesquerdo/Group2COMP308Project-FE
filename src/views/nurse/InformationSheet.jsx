import { cilMedicalCross, cilNoteAdd, cilTask, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CHeader,
  CRow,
} from "@coreui/react";
import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import PreviousClinicalVisitInfo from "./PreviousClinicalVisitInfo";
import { format } from "date-fns";

const InformationSheet = () => {
  const { id } = useParams();
  const naviagate = useNavigate();
  const location = useLocation();

  const { patient } = location.state;

  return (
    <div className="flex flex-col gap-6">
      <CCard>
        <CCardHeader>
          <CIcon icon={cilUser} /> Information Sheet
        </CCardHeader>
        <CCardBody>
          <CHeader>Patient personal information</CHeader>
          <div className="flex gap-32">
            <div className="flex flex-col p-4 pb-0">
              <div className="flex gap-16">
                <p className="w-28">Family Name:</p>
                <strong className="uppercase">{patient.lastName}</strong>
              </div>
              <div className="flex gap-16">
                <p className="w-28">Given Name:</p>
                <strong className="uppercase">{patient.firstName}</strong>
              </div>
              <div className="flex gap-16">
                <p className="w-28">Gender:</p>
                <strong className="uppercase">
                  {patient.gender ? "Male" : "female"}
                </strong>
              </div>
              <div className="flex gap-16">
                <p className="w-28">Date of Birth:</p>
                <strong className="uppercase">
                  {format(new Date(patient.dob), "dd MMM yyyy")}
                </strong>
              </div>
            </div>
            <div className="flex flex-col p-4 pb-0">
              <div className="flex gap-16">
                <p className="w-40">Document presented:</p>
                <strong className="uppercase">OHIP</strong>
              </div>
              <div className="flex gap-16">
                <p className="w-40">Document number:</p>
                <strong className="uppercase">AB123498</strong>
              </div>
              <div className="flex gap-16">
                <p className="w-40">Issue Country:</p>
                <strong className="uppercase">CANADA</strong>
              </div>
              <div className="flex gap-16">
                <p className="w-40">Date of expiry:</p>
                <strong className="uppercase">08 May 2027</strong>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader className="flex justify-between items-center">
          <div>
            <CIcon icon={cilTask} /> Clinical Visits
          </div>
          <CButton size="sm">Add Visit</CButton>
        </CCardHeader>
        <CCardBody>
          <div className="flex justify-end"></div>
          <div>
            <PreviousClinicalVisitInfo />
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader className="flex justify-between items-center">
          <div>
            <CIcon icon={cilNoteAdd} className="mr-1" />
            Vital Signs History
          </div>
          <CButton
            size="sm"
            component={Link}
            to={`/nurse/patients/${id}/vital-signs`}
          >
            Add Vital Signs
          </CButton>
        </CCardHeader>
        <CCardBody>No Data yet</CCardBody>
      </CCard>
    </div>
  );
};

export default InformationSheet;
