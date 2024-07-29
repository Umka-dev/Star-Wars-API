import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardContainer } from '../components/characters';
import FilterPanel from '../components/FilterPanel';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get('name') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [gender, setGender] = useState(searchParams.getAll('gender'));

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleGenderChange = (value, checked) => {
    setGender((prev) =>
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
    gender.forEach((g) => newParams.append('gender', g));

    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setName('');
    setStatus('');
    setGender([]);
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
        gender={gender}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
      <CardContainer queryParams={searchParams} />
    </>
  );
};

export default SearchResults;
