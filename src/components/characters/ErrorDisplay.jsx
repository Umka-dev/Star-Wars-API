import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorDisplay = ({ message }) => {
  return (
    <Box
      maxWidth='xl'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='90vh'
    >
      <Typography variant='h5'>Error: {message}</Typography>
    </Box>
  );
};

export default ErrorDisplay;
