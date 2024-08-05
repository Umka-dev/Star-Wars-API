import React from 'react';

import { useQueryParams } from '../../context/QueryParamsContext';

import useSWRInfinite from 'swr/infinite';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { SpeciesChips, Cards, ErrorDisplay, LoadingDisplay } from './';

import { fetcher } from '../../utils';
import { commonStyles, CHARACTER_API_URL } from '../../constants';

const ALL_SPECIES_NAME = 'All Species';

const CardContainer = () => {
  const { queryParams } = useQueryParams(); // Use the context
  const [characters, setCharacters] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(null);
  const [hasNextPage, setHasNextPage] = React.useState('');

  const [speciesList, setSpeciesList] = React.useState([]);
  const [selectedSpecies, setSelectedSpecies] = React.useState([]);
  const [filteredCharacters, setFilteredCharacters] = React.useState([]);

  const getKey = (_, prevCharacters) => {
    if (prevCharacters && !prevCharacters.info.next) return null;
    if (prevCharacters) return prevCharacters.info.next;
    if (queryParams) return `${CHARACTER_API_URL}?${queryParams.toString()}`;
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
    console.info(`You clicked the Chip: ${species}`);
  };

  console.log('Selected species: ', selectedSpecies);
  console.log('Filtered characters: ', filteredCharacters);

  if (error) return <ErrorDisplay message={error.message} />;
  if (!data) return <LoadingDisplay />;

  return (
    <Box textAlign='center'>
      <SpeciesChips
        speciesList={speciesList}
        selectedSpecies={selectedSpecies}
        handleChipClick={handleChipClick}
      />

      <Cards characterList={filteredCharacters} />
      {filteredCharacters.length ? (
        <Typography variant='subtitle2' m={6}>
          Characters shown {filteredCharacters.length} from {totalCount}
        </Typography>
      ) : null}

      {hasNextPage && (
        <Button
          variant='outlined'
          sx={{
            color: commonStyles.primaryTextColor,
            borderColor: commonStyles.borderColor,
            marginBottom: '100px',
            ':hover': { color: commonStyles.linkColor },
          }}
          onClick={() => {
            setSize(size + 1); // Set next page to load
          }}
          disabled={isValidating} // Disable button while loading
        >
          {isValidating ? (
            <CircularProgress
              size={24}
              value={20}
              thickness={4}
              sx={{
                color: commonStyles.borderColor,
                px: '40px',
                ':hover': { color: commonStyles.linkColor },
              }}
            />
          ) : (
            'Load more'
          )}
        </Button>
      )}
    </Box>
  );
};

export default CardContainer;
