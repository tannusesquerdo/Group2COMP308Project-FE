import React from 'react';
import { gql, useMutation } from '@apollo/client';
import Spinner from 'react-bootstrap/Spinner';
import { CREATE_VITAL_ALERT } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    TextField,
} from '@mui/material';

function CreateVitalAlert() {
    let navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        message: '',
        address: '',
        phone: '',
        patientId: ''
    });
    const [createVitalAlert, { loading, error }] = useMutation(CREATE_VITAL_ALERT);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createVitalAlert({
            variables: formData
        });

        setFormData({
            message: '',
            address: '',
            phone: '',
            patientId: ''
        });

        navigate('/');
    };

    if (loading) return <Spinner animation="border" />;
    if (error) return `Submission error! ${error.message}`;

    return (
        <Container maxWidth="xs">
            <Box sx={{ mt: 1 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter message"
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                    />
                    <TextField
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />
                    <TextField
                        label="Patient ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="patientId"
                        value={formData.patientId}
                        onChange={handleChange}
                        placeholder="Enter patient ID"
                    />
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        > 
                            Submit 
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
}

export default CreateVitalAlert;
