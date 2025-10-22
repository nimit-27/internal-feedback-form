// feedbackApi.js

const API_URL = 'http://localhost:8080/api/feedback';

const submitFeedback = async (feedbackData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedbackData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting feedback:', error);
        throw error;
    }
};

export default {
    submitFeedback,
};

export { submitFeedback };