/**
 * Last Modified by T. Jemison on 12/04/2023
 * Component: PreviousClinicalVisitInfo
 * Displays information captured during previous clinical visits for nurses.
 * Retrieves and presents a history of vital signs data.
 * Props:
 *  - patientId: ID of the patient to fetch the relevant data.
 */

import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { useQuery } from "@apollo/client";
import { GET_DAILY_VITAL } from "../../graphql/queries";
import useAuth from "../../hooks/useAuth";
// Import other necessary components or data fetching functions as required

function PreviousClinicalVisitInfo() {
  const { user } = useAuth();
  const [previousVisits, setPreviousVisits] = useState([]);

  const { data, loading, error } = useQuery(GET_DAILY_VITAL, {
    variables: { patient: user._id },
  });
  console.log(data);

  useEffect(() => {
    const fetchedData = [
      {
        id: 1,
        date: "2023-10-15",
        bodyTemperature: 98.6,
        heartRate: 80,
        bloodPressure: "120/80",
        respiratoryRate: 18,
      },
      {
        id: 2,
        date: "2023-09-28",
        bodyTemperature: 99.2,
        heartRate: 75,
        bloodPressure: "118/76",
        respiratoryRate: 20,
      },
      // Add more visits if available
    ];
    setPreviousVisits(fetchedData);
  }, []); // Fetch data on component mount

  return (
    <CRow>
      <CCol xs={12}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Body Temperature</th>
              <th>Heart Rate</th>
              <th>Blood Pressure</th>
              <th>Respiratory Rate</th>
            </tr>
          </thead>
          <tbody>
            {previousVisits.map((visit) => (
              <tr key={visit.id}>
                <td>{visit.date}</td>
                <td>{visit.bodyTemperature}</td>
                <td>{visit.heartRate}</td>
                <td>{visit.bloodPressure}</td>
                <td>{visit.respiratoryRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CCol>
    </CRow>
  );
}

export default PreviousClinicalVisitInfo;
