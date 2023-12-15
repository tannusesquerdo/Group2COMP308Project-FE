import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { DELETE_USER } from "../../graphql/mutations";
import { GET_USERS } from "../../graphql/queries";
import CIcon from "@coreui/icons-react";
import { cilPeople, cilSettings, cilX } from "@coreui/icons";
import { format } from "date-fns";

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
  CTableDataCell,
  CAvatar,
  CProgress,
} from "@coreui/react";

function UserList() {
  const navigate = useNavigate();
  const {
    loading,
    error,
    data: { getAllUsers } = {},
    refetch,
  } = useQuery(GET_USERS);

  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: () => {
      refetch();
      toast.success("User deleted successfully");
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser({ variables: { id } });
    }
  };

  const navigateSheet = (patient) => {
    navigate(`/nurse/patients/${patient._id}`, { state: { patient } });
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Patients</strong>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Email
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Date of Birth
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Gender
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {getAllUsers.map((user) => (
                  <CTableRow key={user._id}>
                    <CTableDataCell className="text-center">
                      <CAvatar
                        size="md"
                        src={`https://ui-avatars.com/api/?background=random&name=${user.firstName}+${user.lastName}`}
                      ></CAvatar>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{`${user.firstName} ${user.lastName}`}</div>
                      <div className="small text-medium-emphasis">
                        Last visited: 2023-12-10
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      {user.email}
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      {format(new Date(user.dob), "dd MMM yyyy")}
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      {user.gender === "0" ? "Male" : "Female"}
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mr-1"
                        onClick={() => navigateSheet(user)}
                      >
                        <CIcon icon={cilSettings} />
                      </Button>{" "}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        <CIcon icon={cilX} />
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
