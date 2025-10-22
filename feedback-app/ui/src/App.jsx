import React from 'react';
import { Box, Typography } from '@mui/material';
import FeedbackForm from './components/FeedbackForm';

function App() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                py: 4,
                px: 2,
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Feedback Application
            </Typography>
            <FeedbackForm />
        </Box>
    );
}

export default App;