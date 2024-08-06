import React from 'react';
import {
  CardContainer,
  FilterPanel,
  header2Styles,
} from '../components/characters';

import { Box, Typography } from '@mui/material';

const SearchResults = () => {
  return (
    <Box textAlign='center'>
      <FilterPanel />
      <Typography variant='h2' sx={header2Styles}>
        Found characters
      </Typography>
      <CardContainer />
    </Box>
  );
};

export default SearchResults;
