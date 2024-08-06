import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  SpeciesChips,
  CardContainer,
  h1Styled,
} from '../components/characters';

const HomePage = () => {
  return (
    <Box textAlign='center'>
      <Typography variant='h1' sx={h1Styled}>
        The Rick and Morty Characters
      </Typography>
      <SpeciesChips />
      <CardContainer />
    </Box>
  );
};

export default HomePage;
