import React, { useState } from 'react';
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
                <label>S. No.:</label>
                <input type="text" value={serialNumber ? serialNumber : 'Auto-generated after submission'} readOnly />
            </div>
            <div>
                <label htmlFor="division">Division *</label>
                <select id="division" name="division" value={formValues.division} onChange={handleChange} required>
                    <option value="">Select division</option>
                    {divisionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="depot">Depot *</label>
                <select id="depot" name="depot" value={formValues.depot} onChange={handleChange} required>
                    <option value="">Select depot</option>
                    {depotOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="submittedBy">Submitted by *</label>
                <select id="submittedBy" name="submittedBy" value={formValues.submittedBy} onChange={handleChange} required>
                    <option value="">Select submitter</option>
                    {submittedByOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="contactNumber">Contact Number *</label>
                <input type="tel" id="contactNumber" name="contactNumber" value={formValues.contactNumber} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="dateOfObservation">Date of Observation *</label>
                <input type="date" id="dateOfObservation" name="dateOfObservation" value={formValues.dateOfObservation} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="module">Module *</label>
                <select id="module" name="module" value={formValues.module} onChange={handleChange} required>
                    <option value="">Select module</option>
                    {moduleOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="describeObservation">Describe Observation *</label>
                <textarea id="describeObservation" name="describeObservation" value={formValues.describeObservation} onChange={handleChange} rows={3} required />
            </div>
            <div>
                <label htmlFor="testId">Test ID</label>
                <input type="text" id="testId" name="testId" value={formValues.testId} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="scenario">Scenario</label>
                <textarea id="scenario" name="scenario" value={formValues.scenario} onChange={handleChange} rows={3} />
            </div>
            <div>
                <label htmlFor="expectedResult">Expected Result</label>
                <textarea id="expectedResult" name="expectedResult" value={formValues.expectedResult} onChange={handleChange} rows={3} />
            </div>
            <div>
                <label htmlFor="actualResult">Actual Result</label>
                <textarea id="actualResult" name="actualResult" value={formValues.actualResult} onChange={handleChange} rows={3} />
            </div>
            <div>
                <label htmlFor="attachment">Screenshot / Video of Feedback</label>
                <input type="file" id="attachment" name="attachment" accept="image/*,video/*" onChange={(event) => setAttachment(event.target.files?.[0] ?? null)} />
            </div>
            <div>
                <label htmlFor="remark">Remark (If any)</label>
                <input type="text" id="remark" name="remark" value={formValues.remark} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="suggestions">Suggestions / Improvements</label>
                <input type="text" id="suggestions" name="suggestions" value={formValues.suggestions} onChange={handleChange} />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && (
                <p style={{ color: 'green' }}>
                    {success}
                    {serialNumber && ` Reference ID: ${serialNumber}`}
                </p>
            )}
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
