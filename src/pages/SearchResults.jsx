import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardContainer, FilterPanel } from '../components/characters';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
  };

  const handleResetFilters = () => {
    setFilters({
      name: '',
      status: '',
      gender: '',
    });
    setSearchParams(new URLSearchParams());
  };

  return (
    <>
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
      <CardContainer queryParams={searchParams} />
    </>
  );
};

export default SearchResults;
