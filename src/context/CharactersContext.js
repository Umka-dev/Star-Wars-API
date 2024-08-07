import React, { createContext, useContext, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { ALL_SPECIES_NAME } from '../constants';
import { useCharactersApi } from '../hooks/useCharactersApi';

// Create CONTEXT
const CharactersContext = createContext();

// Create PROVIDER
export const CharactersContextProvider = ({ children }) => {
  // ---States for Species Chips
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

  const {
    characters,
    totalCount,
    hasNextPage,
    error,
    isValidating,
    setSize,
    speciesList,
  } = useCharactersApi(searchParams);

  const handleNextPage = () => {
    setSize((prevSize) => prevSize + 1);
  };

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
    setSelectedSpecies((prevSelected) => {
      if (species === ALL_SPECIES_NAME) {
        return [];
      }

      const isSelected = prevSelected.includes(species);

      if (isSelected) {
        return prevSelected.filter(
          (selectedSpecies) => selectedSpecies !== species,
        );
      }

      return [...prevSelected, species];
    });
  };
  // Get species, filter characters and handlers for Species Chips---

  // ---Handlers for Search Bar
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

  const handleNameChange = (e) => {
    handleFilterChange('name', e.target.value);
  };

  const handleApplyFilters = React.useCallback(() => {
    const newParams = new URLSearchParams(filters);
    setSearchParams(newParams);
  }, [filters]);

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
        characters,
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
