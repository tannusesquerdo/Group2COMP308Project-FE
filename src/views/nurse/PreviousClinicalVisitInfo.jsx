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

  useEffect(() => {
    if (data?.getDailyVital.length > 0) {
      setPreviousVisits(data.getDailyVital);
    }
  }, [data]); // Fetch data on component mount

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
              <tr key={visit._id}>
                <td>{visit.updateDate}</td>
                <td>{visit.temperature}</td>
                <td>{visit.heartRate}</td>
                <td>{visit.bloodPresure}</td>
                <td>{visit.respRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CCol>
    </CRow>
  );
}

export default PreviousClinicalVisitInfo;
