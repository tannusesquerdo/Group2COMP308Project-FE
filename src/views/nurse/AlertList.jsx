import React, { useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Spinner from 'react-bootstrap/Spinner';
import { DELETE_ALERT } from '../../graphql/mutations';
import { GET_ALERT } from '../../graphql/queries';

import { Link } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell
} from '@coreui/react';
import Button from 'react-bootstrap/Button';
function AlertList() {
    const { loading, error, data, refetch } = useQuery(GET_ALERT);
    const [deleteAlert] = useMutation(DELETE_ALERT, {
        onCompleted: () => refetch()
    });

    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this alert?')) {
            deleteAlert({ variables: { id } });
        }
    };

    if (loading) return <Spinner animation="border" />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Alert List</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable striped hover>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell>Responder Name</CTableHeaderCell>
                                    <CTableHeaderCell>Email</CTableHeaderCell>
                                    <CTableHeaderCell>Phone Number</CTableHeaderCell>
                                    <CTableHeaderCell>Patient Name</CTableHeaderCell>
                                    <CTableHeaderCell>Address</CTableHeaderCell>
                                    <CTableHeaderCell>Message</CTableHeaderCell>
                                    <CTableHeaderCell>Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {data.alerts.map((alert) => (
                                    <CTableRow key={alert._id}>
                                        <CTableDataCell>{alert.responderName}</CTableDataCell>
                                        <CTableDataCell>{alert.email}</CTableDataCell>
                                        <CTableDataCell>{alert.phoneNumber}</CTableDataCell>
                                        <CTableDataCell>{alert.patientName}</CTableDataCell>
                                        <CTableDataCell>{alert.address}</CTableDataCell>
                                        <CTableDataCell>{alert.message}</CTableDataCell>
                                        <CTableDataCell>
                                            <Button variant="danger" onClick={() => handleDelete(alert._id)}>Delete</Button>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default AlertList;
