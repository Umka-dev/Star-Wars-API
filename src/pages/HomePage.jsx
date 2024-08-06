import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  SpeciesChips,
  CardContainer,
  header1Styles,
} from '../components/characters';

const HomePage = () => {
  return (
    <Box textAlign='center'>
      <Typography variant='h1' sx={header1Styles}>
        The Rick and Morty Characters
      </Typography>
      <SpeciesChips />
      <CardContainer />
    </Box>
  );
};

export default HomePage;
