import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardContainer, FilterPanel } from '../components/characters';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get('name') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [genders, setGenders] = useState(searchParams.getAll('gender') || []);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleGenderChange = (value, checked) => {
    setGenders((prev) =>
      checked ? [...prev, value] : prev.filter((g) => g !== value),
    );
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleApplyFilters = () => {
    const newParams = new URLSearchParams();

    if (name) newParams.set('name', name);
    if (status) newParams.set('status', status);
    genders.forEach((g) => newParams.append('gender', g));

    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setName('');
    setStatus('');
    setGenders([]);
    setSearchParams(new URLSearchParams());
  };

  return (
    <>
      <FilterPanel
        onNameChange={handleNameChange}
        name={name}
        onStatusChange={handleStatusChange}
        status={status}
        onGenderChange={handleGenderChange}
        genders={genders}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
      <CardContainer queryParams={searchParams} />
    </>
  );
};

export default SearchResults;
