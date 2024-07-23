import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { fetcher } from '../../utils';
import { Box } from '@mui/material';
import CharacterDetails from './CharacterDetails';
import { ErrorDisplay, LoadingDisplay } from './index';

import { CHARACTER_API_URL } from '../../constants';

const SearchCharacter = () => {
  const { name } = useParams();
  const [url, setUrl] = useState(null);

  const { data, error } = useSWR(url, fetcher);

  const handleSearch = () => {
    if (name) {
      setUrl(`${CHARACTER_API_URL}?name=${name}`);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [name]);

  if (error) return <ErrorDisplay message={error.message} />;
  if (!data) return <LoadingDisplay />;

  const searchedCharacter =
    data.results && data.results.length > 0 ? data.results[0] : null;

  return (
    <>
      {searchedCharacter ? (
        <CharacterDetails searchedCharacter={searchedCharacter} />
      ) : (
        <Box>No character found</Box>
      )}
    </>
  );
};

export default SearchCharacter;
