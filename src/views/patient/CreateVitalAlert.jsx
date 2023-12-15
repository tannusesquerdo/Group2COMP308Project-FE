import React from 'react';
import { gql, useMutation } from '@apollo/client';
import Spinner from 'react-bootstrap/Spinner';
import { CREATE_ALERT } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from "../../hooks/useAuth";

import {
    Box,
    Button,
    Container,
    TextField,
} from '@mui/material';

function CreateVitalAlert() {
    const { user } = useAuth();
    let navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        message: '',
        address: '',
        phone: '',
        patient: user._id 
    });
    const [createVitalAlert, { loading, error }] = useMutation(CREATE_ALERT, {
        onCompleted: (data) => {
            // Assuming the mutation returns an object with a message and status on successful completion
            toast.success(data.createNewAlert.message);
            navigate('/dashboard'); // Update with your desired path
        },
        onError: (err) => {
            toast.error(`Submission error! ${err.message}`);
        }
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        createVitalAlert({
            variables: formData
        });
    };

    if (loading) return <Spinner animation="border" />;
    if (error) {
        toast.error(`Submission error! ${error.message}`);
        return null; // or you can return an error message component
    }

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
                        required
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
                        required
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
                        required
                    />
                  
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            disabled={loading}
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
