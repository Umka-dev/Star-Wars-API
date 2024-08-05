import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQueryParams } from '../context/QueryParamsContext';
import {
  CardContainer,
  FilterPanel,
  header2Styles,
} from '../components/characters';

import { Box, Typography } from '@mui/material';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setQueryParams } = useQueryParams(); // Use the context
  const [filters, setFilters] = React.useState({
    name: searchParams.get('name') || '',
    status: searchParams.get('status') || '',
    gender: searchParams.get('gender') || '',
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApplyFilters = () => {
    const newParams = new URLSearchParams();
    if (filters.name) newParams.set('name', filters.name);
    if (filters.status) newParams.set('status', filters.status);
    if (filters.gender) newParams.set('gender', filters.gender);
    setSearchParams(newParams);
    setQueryParams(newParams); // Update the context
  };

  const handleResetFilters = () => {
    setFilters({
      name: '',
      status: '',
      gender: '',
    });
    setSearchParams(new URLSearchParams());
    setQueryParams(new URLSearchParams()); // Update the context
  };

  return (
    <Box textAlign='center'>
      <FilterPanel
        onNameChange={(value) => handleFilterChange('name', value)}
        name={filters.name}
        onStatusChange={(e) => handleFilterChange('status', e.target.value)}
        status={filters.status}
        onGenderChange={(e) => handleFilterChange('gender', e.target.value)}
        gender={filters.gender}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
      <Typography variant='h2' sx={header2Styles}>
        Found characters
      </Typography>
      <CardContainer queryParams={searchParams} />
    </Box>
  );
};

export default SearchResults;
