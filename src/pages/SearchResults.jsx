import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CardContainer,
  GenderCheckboxes,
  StatusRadioButtons,
} from '../components/characters';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (key, value, isCheckbox = false) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      if (isCheckbox) {
        const values = newParams.getAll(key);
        if (value.checked) {
          newParams.append(key, value.value);
        } else {
          newParams.delete(key);
          values
            .filter((v) => v !== value.value)
            .forEach((v) => newParams.append(key, v));
        }
      } else {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      }
      return newParams;
    });
  };

  const handleStatusChange = (e) => {
    updateSearchParams('status', e.target.value);
  };

  const handleGenderChange = (value, checked) => {
    updateSearchParams('gender', { value, checked }, true);
  };

  return (
    <>
      <StatusRadioButtons
        onChange={handleStatusChange}
        status={searchParams.get('status')}
      />
      <GenderCheckboxes
        onChange={handleGenderChange}
        gender={searchParams.getAll('gender')}
      />
      <CardContainer queryParams={searchParams} />
    </>
  );
};

export default SearchResults;
