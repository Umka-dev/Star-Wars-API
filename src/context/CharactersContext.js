import React, { createContext, useContext, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useSWRInfinite from 'swr/infinite';

import { fetcher } from '../utils';
import { CHARACTER_API_URL, ALL_SPECIES_NAME } from '../constants';

// Create CONTEXT
const CharactersContext = createContext();

// Create PROVIDER
export const CharactersContextProvider = ({ children }) => {
  // ---States for Card Container
  const [characters, setCharacters] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [hasNextPage, setHasNextPage] = useState('');
  // States for Card Container---

  // ---States for Species Chips
  const [speciesList, setSpeciesList] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  // States for Species Chips---

  // ---States for Search Bar
  const navigate = useNavigate();
  // States for Search Bar---\

  // ---States for Filter Panel
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    name: searchParams.get('name') || '',
    status: searchParams.get('status') || '',
    gender: searchParams.get('gender') || '',
  });
  // States for Filter Panel---

  // ---Data fetching for Card Container
  const getKey = (_, prevCharacters) => {
    if (prevCharacters && !prevCharacters.info.next) return null;
    if (prevCharacters) return prevCharacters.info.next;
    if (searchParams) return `${CHARACTER_API_URL}?${searchParams.toString()}`;
    return CHARACTER_API_URL;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );

  React.useEffect(() => {
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

  const handleNextPage = () => {
    setSize(size + 1);
  };
  // Data fetching for Card Container---

  // ---Get species, filter characters and handlers for Species Chips
  React.useEffect(() => {
    const allSpecies = [
      ALL_SPECIES_NAME,
      ...new Set(characters.map(({ species }) => species)),
    ];

    setSpeciesList(allSpecies);
  }, [characters]);

  React.useEffect(() => {
    if (!selectedSpecies.length) {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(
        characters.filter(({ species }) => selectedSpecies.includes(species)),
      );
    }
  }, [characters, selectedSpecies]);

  const handleChipClick = (species) => {
    if (species === ALL_SPECIES_NAME) {
      setSelectedSpecies([]);
    } else {
      setSelectedSpecies((prevSelected) => {
        const isSelected = prevSelected.includes(species);

        if (isSelected) {
          return prevSelected.filter(
            (selectedSpecies) => selectedSpecies !== species,
          );
        }

        return [...prevSelected, species];
      });
    }
  };
  // Get species, filter characters and handlers for Species Chips---

  // ---Handlers for Search Bar
  const handleNameChange = (e) => {
    handleFilterChange('name', e.target.value);
  };

  const handleSearchNavigate = () => {
    navigate(`/search/?name=${filters.name.toLowerCase()}`);
    setSelectedSpecies([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchNavigate();
    }
  };
  // Handlers for Search Bar---

  // ---Handlers for Filter Panel
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApplyFilters = React.useCallback(
    ({ name }) => {
      const newParams = new URLSearchParams();
      if (name) {
        newParams.set('name', name);
        handleFilterChange('name', name);
      }
      if (filters.status) newParams.set('status', filters.status);
      if (filters.gender) newParams.set('gender', filters.gender);
      setSearchParams(newParams);
    },
    [filters],
  );

  const handleResetFilters = () => {
    setFilters({
      name: '',
      status: '',
      gender: '',
    });
    setSearchParams(new URLSearchParams());
  };
  // Handlers for Filter Panel---

  return (
    <CharactersContext.Provider
      value={{
        data,
        error,
        totalCount,
        hasNextPage,
        handleNextPage,
        isValidating,
        speciesList,
        selectedSpecies,
        handleChipClick,
        filteredCharacters,
        searchParams,
        filters,
        handleFilterChange,
        handleApplyFilters,
        handleResetFilters,
        handleNameChange,
        handleSearchNavigate,
        handleKeyDown,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

// Create the HOOK for using Characters Context
export const useCharactersContext = () => useContext(CharactersContext);
