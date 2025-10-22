const API_URL = 'http://localhost:8080/api/feedback';

const submitFeedback = async (formData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(errorBody || 'Network response was not ok');
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
