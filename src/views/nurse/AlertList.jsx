import React, { useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import Spinner from 'react-bootstrap/Spinner';
import { DELETE_ALERT } from '../../graphql/mutations';
import { GET_ALERTS } from '../../graphql/queries';

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
    const { loading, error, data, refetch } = useQuery(GET_ALERTS);
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
                                    <CTableHeaderCell>Phone Number</CTableHeaderCell>
                                    <CTableHeaderCell>Patient Name</CTableHeaderCell>
                                    <CTableHeaderCell>Address</CTableHeaderCell>
                                    <CTableHeaderCell>Message</CTableHeaderCell>
                                    <CTableHeaderCell>Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {data.getAlerts.map((alert) => (
                                    <CTableRow key={alert._id}>
                                        <CTableDataCell>{alert.phone}</CTableDataCell>
                                        <CTableDataCell>{alert.patient}</CTableDataCell>
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
