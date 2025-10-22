import React, { useState } from 'react';
import feedbackApi from '../api/feedbackApi';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !message) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            await feedbackApi.submitFeedback({ name, message });
            setSuccess('Feedback submitted successfully!');
            setName('');
            setMessage('');
        } catch (err) {
            setError('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;