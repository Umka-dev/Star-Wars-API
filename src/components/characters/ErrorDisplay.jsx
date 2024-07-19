import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorDisplay = ({ message }) => {
  return (
    <Box
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        marginTop: '20px',
      }}
    >
      <Typography variant='h5'>Error: {message}</Typography>
    </Box>
  );
};

export default ErrorDisplay;
