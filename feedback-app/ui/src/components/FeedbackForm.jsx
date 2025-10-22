import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Stack,
    TextField,
    Typography,
    MenuItem,
} from '@mui/material';
import feedbackApi from '../api/feedbackApi';

const divisionOptions = ['Division A', 'Division B', 'Division C'];
const depotOptions = ['Depot 1', 'Depot 2', 'Depot 3'];
const submittedByOptions = ['QA Analyst', 'Engineer', 'Product Manager'];
const moduleOptions = ['Module Alpha', 'Module Beta', 'Module Gamma'];

const initialFormState = {
    division: '',
    depot: '',
    submittedBy: '',
    contactNumber: '',
    dateOfObservation: '',
    module: '',
    describeObservation: '',
    testId: '',
    scenario: '',
    expectedResult: '',
    actualResult: '',
    remark: '',
    suggestions: '',
};

const FeedbackForm = () => {
    const [formValues, setFormValues] = useState(initialFormState);
    const [attachment, setAttachment] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormValues(initialFormState);
        setAttachment(null);
    };

    const validateForm = () => {
        if (!formValues.division || !formValues.depot || !formValues.submittedBy || !formValues.contactNumber || !formValues.dateOfObservation || !formValues.module || !formValues.describeObservation) {
            setError('Please fill in all required fields.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) {
            return;
        }

        try {
            const payload = new FormData();
            Object.entries(formValues).forEach(([key, value]) => {
                payload.append(key, value ?? '');
            });

            if (attachment) {
                payload.append('attachment', attachment);
            }

            const response = await feedbackApi.submitFeedback(payload);
            setSuccess('Feedback submitted successfully!');
            setSerialNumber(response?.serialNo ?? '');
            resetForm();
        } catch (err) {
            setError('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '70%', md: '40%' },
                mx: 'auto',
                boxShadow: 6,
                borderRadius: 3,
            }}
        >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <Stack spacing={2.5}>
                        <TextField
                            label="S. No."
                            value={serialNumber ? serialNumber : 'Auto-generated after submission'}
                            InputProps={{ readOnly: true }}
                            fullWidth
                        />
                        <TextField
                            select
                            label="Division *"
                            name="division"
                            value={formValues.division}
                            onChange={handleChange}
                            required
                            fullWidth
                        >
                            <MenuItem value="">Select division</MenuItem>
                            {divisionOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Depot *"
                            name="depot"
                            value={formValues.depot}
                            onChange={handleChange}
                            required
                            fullWidth
                        >
                            <MenuItem value="">Select depot</MenuItem>
                            {depotOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Submitted by *"
                            name="submittedBy"
                            value={formValues.submittedBy}
                            onChange={handleChange}
                            required
                            fullWidth
                        >
                            <MenuItem value="">Select submitter</MenuItem>
                            {submittedByOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Contact Number *"
                            type="tel"
                            name="contactNumber"
                            value={formValues.contactNumber}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Date of Observation *"
                            type="date"
                            name="dateOfObservation"
                            value={formValues.dateOfObservation}
                            onChange={handleChange}
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            select
                            label="Module *"
                            name="module"
                            value={formValues.module}
                            onChange={handleChange}
                            required
                            fullWidth
                        >
                            <MenuItem value="">Select module</MenuItem>
                            {moduleOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Describe Observation *"
                            name="describeObservation"
                            value={formValues.describeObservation}
                            onChange={handleChange}
                            required
                            fullWidth
                            multiline
                            rows={3}
                        />
                        <TextField
                            label="Test ID"
                            name="testId"
                            value={formValues.testId}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Scenario"
                            name="scenario"
                            value={formValues.scenario}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={3}
                        />
                        <TextField
                            label="Expected Result"
                            name="expectedResult"
                            value={formValues.expectedResult}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={3}
                        />
                        <TextField
                            label="Actual Result"
                            name="actualResult"
                            value={formValues.actualResult}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={3}
                        />
                        <Button variant="outlined" component="label">
                            Upload Screenshot / Video
                            <input
                                type="file"
                                hidden
                                accept="image/*,video/*"
                                name="attachment"
                                onChange={(event) => setAttachment(event.target.files?.[0] ?? null)}
                            />
                        </Button>
                        {attachment && (
                            <Typography variant="body2" color="text.secondary">
                                Selected file: {attachment.name}
                            </Typography>
                        )}
                        <TextField
                            label="Remark (If any)"
                            name="remark"
                            value={formValues.remark}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Suggestions / Improvements"
                            name="suggestions"
                            value={formValues.suggestions}
                            onChange={handleChange}
                            fullWidth
                        />
                        {error && (
                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>
                        )}
                        {success && (
                            <Typography color="success.main" variant="body2">
                                {success}
                                {serialNumber && ` Reference ID: ${serialNumber}`}
                            </Typography>
                        )}
                        <Button type="submit" variant="contained" size="large" fullWidth>
                            Submit Feedback
                        </Button>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
};

export default FeedbackForm;
