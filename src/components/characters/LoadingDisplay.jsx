import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingDisplay = () => {
  return (
    <Box
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={50} determinate value={20} thickness={4} />
    </Box>
  );
};

export default LoadingDisplay;
