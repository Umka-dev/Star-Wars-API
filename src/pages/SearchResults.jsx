import React from 'react';
import { CardContainer, h2Styled } from '../components';
import { FilterPanel } from '../components/FilterPanel';

import { Box, Typography } from '@mui/material';

const SearchResults = () => {
  return (
    <Box textAlign='center'>
      <FilterPanel />
      <Typography variant='h2' sx={h2Styled}>
        Found characters
      </Typography>
      <CardContainer />
    </Box>
  );
};

export default SearchResults;
