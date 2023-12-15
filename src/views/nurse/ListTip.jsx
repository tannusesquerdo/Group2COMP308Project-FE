import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Spinner from "react-bootstrap/Spinner";
import { GET_TIPS , DELETE_TIPS } from "../../graphql/mutations";
import { Link } from "react-router-dom";
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
} from "@coreui/react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";


function TipList() {
  const { loading, error, data, refetch } = useQuery(GET_TIPS);
  const [deleteTips] = useMutation(DELETE_TIPS, {
    onCompleted: () => refetch(),
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tip?")) {
      deleteTips({ variables: { id } }).catch((error) => {
        toast.error(error.message);
      });
    }
  };

  if (loading) return <Spinner animation="border" />;
  if (error) {
    console.error(error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Tip List</strong>
          </CCardHeader>
          <CCardBody>
            <Link to="/add-tip">
              <Button color="primary" variant="contained">Add Tip</Button>
            </Link>
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Title</CTableHeaderCell>
                  <CTableHeaderCell>Description</CTableHeaderCell>
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.tips.map((tip) => (
                  <CTableRow key={tip._id}>
                    <CTableDataCell>{tip.title}</CTableDataCell>
                    <CTableDataCell>{tip.description}</CTableDataCell>
                    <CTableDataCell>
                      <Button variant="danger" onClick={() => handleDelete(tip._id)}>Delete</Button>
                      <Link to={`/edit-tip/${tip._id}`}>
                        <Button variant="primary">Edit</Button>
                      </Link>
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

export default TipList;
