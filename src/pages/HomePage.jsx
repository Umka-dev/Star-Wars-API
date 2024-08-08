import React from 'react';
import { Box } from '@mui/material';
import { SpeciesChips, CardContainer } from '../components';
import CustomTypography from '../components/CustomTypography';

const HomePage = () => {
  return (
    <Box
      textAlign='center'
      sx={{
        mt: {
          xs: '160px',
          sm: '110px',
        },
      }}
    >
      <CustomTypography>The Rick and Morty Characters</CustomTypography>
      <SpeciesChips />
      <CardContainer />
    </Box>
  );
};

export default HomePage;
