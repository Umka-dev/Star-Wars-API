import React, { useState, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';

import { fetcher } from '../utils';

import { ALL_SPECIES_NAME, CHARACTER_API_URL } from '../constants';

/**
 * Custom hook to fetch characters
 */

const useCharactersApi = (searchParams) => {
  // ---States for Card Container
  const [characters, setCharacters] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [hasNextPage, setHasNextPage] = useState('');
  // States for Card Container---

  const [speciesList, setSpeciesList] = useState([]);

  // ---Data fetching for Card Container
  const getKey = React.useCallback(
    (_, prevCharacters) => {
      if (prevCharacters) {
        return prevCharacters.info.next;
      }

      if (searchParams) {
        return `${CHARACTER_API_URL}?${searchParams.toString()}`;
      }

      return CHARACTER_API_URL;
    },
    [searchParams],
  );

  const { data, error, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );

  useEffect(() => {
    if (!data) return;

    if (data[0].error) {
      setCharacters([]);
      setHasNextPage(false);
      return;
    }

    const allCharacters = data.flatMap((data) => data.results);
    const count = data[0]?.info.count;
    const nextPage = data[data.length - 1]?.info.next;

    setCharacters(allCharacters);
    setTotalCount(count);
    setHasNextPage(nextPage);
  }, [data]);

  React.useEffect(() => {
    const allSpecies = [
      ALL_SPECIES_NAME,
      ...new Set(characters.map(({ species }) => species)),
    ];
    setSpeciesList(allSpecies);
  }, [characters]);

  const handleNextPage = () => {
    setSize((prevSize) => prevSize + 1);
  };

  return {
    characters,
    totalCount,
    hasNextPage,
    error,
    handleNextPage,
    isValidating,
    speciesList,
  };
};

export { useCharactersApi };
