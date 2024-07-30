import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardContainer, FilterPanel } from '../components/characters';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get('name') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [genders, setGenders] = useState(searchParams.getAll('gender') || []);

  const handleNameChange = (requestedName) => {
    setName(requestedName);
  };

  const handleStatusChange = (e) => {
    const pickedStatus = e.target.value;
    setStatus(pickedStatus);
  };

  const handleGenderChange = (newGender, checked) => {
    setGenders(
      (prev) =>
        checked
          ? [...prev, newGender] // add new checked gender
          : prev.filter((genders) => genders !== newGender), // delete unchecked gender
    );
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
