import React, { useState, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';

import { fetcher } from '../utils';

import { ALL_SPECIES_NAME } from '../constants';

/**
 * Custom hook to fetch characters
 * @param {getKey} function - Returns correct url for fetching.
 */
const useCharactersApi = (getKey) => {
  // ---States for Card Container
  const [characters, setCharacters] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [hasNextPage, setHasNextPage] = useState('');
  // States for Card Container---

  const [speciesList, setSpeciesList] = useState([]);

  const { data, error, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );

  useEffect(() => {
    if (!data) return;

    if (data[0].error) {
      setCharacters([]);
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

  return {
    characters,
    totalCount,
    hasNextPage,
    error,
    setSize,
    isValidating,
    speciesList,
  };
};

export { useCharactersApi };
