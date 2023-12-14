import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import { GET_USERS, DELETE_USER } from "../../graphql/mutations"; // Adjust this import path as necessary

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

function UserList() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: () => {
      refetch();
      toast.success('User deleted successfully');
    }
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser({ variables: { id } });
    }
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Users</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>First Name</CTableHeaderCell>
                  <CTableHeaderCell>Last Name</CTableHeaderCell>
                  <CTableHeaderCell>Email</CTableHeaderCell>
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.getUsers.map((user) => (
                  <CTableRow key={user.id}>
                    <CTableDataCell>{user.firstName}</CTableDataCell>
                    <CTableDataCell>{user.lastName}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>
                      {/* Link to user vitals or other actions can be added here */}
                      <Button variant="danger" onClick={() => handleDelete(user.id)}>
                        Delete
                      </Button>
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

export default UserList;