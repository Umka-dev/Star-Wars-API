import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardContainer } from '../components/characters';
import FilterPanel from '../components/FilterPanel';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value) {
        newParams.set(name, value);
      } else {
        newParams.delete(name);
      }
      return newParams;
    });
  };

  const handleGenderChange = (value, checked) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      const currentGender = newParams.getAll('gender');

      if (checked) {
        newParams.append('gender', value);
      } else {
        newParams.delete('gender');
        currentGender
          .filter((gender) => gender !== value)
          .forEach((gender) => newParams.append('gender', gender));
      }

      return newParams;
    });
  };

  return (
    <>
      <FilterPanel
        onStatusChange={handleStatusChange}
        status={searchParams.get('status')}
        onGenderChange={handleGenderChange}
        gender={searchParams.getAll('gender')}
      />
      <CardContainer queryParams={searchParams} />
    </>
  );
};

export default SearchResults;
