import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import {GET_TIPS, UPDATE_TIPS} from '../../graphql/mutations';
import { toast } from 'react-toastify';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel
} from '@coreui/react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function EditTip() {
    let navigate = useNavigate();
    let { id } = useParams();
    const { loading, error, data } = useQuery(GET_TIPS, {
        variables: { id }
    });
    const [updateTip] = useMutation(UPDATE_TIPS);
    const [tip, setTip] = useState({
        id: '',
        title: '',
        description: ''
    });

    useEffect(() => {
        if (data && data.tip) {
            setTip({
                id: data.tip._id,
                title: data.tip.title,
                description: data.tip.description
            });
        }
    }, [data]);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTip(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        updateTip({
            variables: {
                id: tip.id,
                title: tip.title,
                description: tip.description
            }
        });

        toast.success('Tip updated successfully');
        navigate('/tips');
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Edit Tip</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <CFormLabel htmlFor='title'>Title</CFormLabel>
                                <Form.Control type="text" name="title" id="title" value={tip.title} onChange={handleInputChange} />
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor='description'>Description</CFormLabel>
                                <Form.Control as="textarea" name="description" id="description" value={tip.description} onChange={handleInputChange} />
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

export default EditTip;
