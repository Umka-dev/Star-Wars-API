import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardContainer, GenderRadioButtons } from '../components/characters';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    e.preventDefault();

    const newSearchParams = {
      name: searchParams.get('name'),
      gender: e.target.value,
    };
    setSearchParams(newSearchParams);
  };

  console.log('Got params: ' + searchParams);

  return (
    <>
      <GenderRadioButtons
        onChange={handleChange}
        gender={searchParams.get('gender')}
      />
      <CardContainer queryParams={searchParams} />
    </>
  );
};

export default SearchResults;
