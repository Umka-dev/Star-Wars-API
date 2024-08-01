import React from 'react';
import useSWRInfinite from 'swr/infinite';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import {
  SpeciesChips,
  Cards,
  ErrorDisplay,
  LoadingDisplay,
  header1Styles,
  header2Styles,
} from './';

import { fetcher } from '../../utils';
import { commonStyles, CHARACTER_API_URL } from '../../constants';

const CardContainer = ({ queryParams }) => {
  const [characters, setCharacters] = React.useState([]);
  const [filteredCharacters, setFilteredCharacters] = React.useState([]);
  const [species, setSpecies] = React.useState([]);
  const [selectedSpecies, setSelectedSpecies] = React.useState(['All Species']);
  const [totalCount, setTotalCount] = React.useState(null);
  const [hasNextPage, setHasNextPage] = React.useState('');

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

    const allSpecies = [
      ...new Set(
        data.flatMap((data) =>
          data.results.map((character) => character.species),
        ),
      ),
    ];

    const count = data[0]?.info.count;

    const nextPage = data[data.length - 1]?.info.next;

    setCharacters(allCharacters);
    setSpecies(allSpecies);
    setTotalCount(count);
    setHasNextPage(nextPage);
  }, [data]);

  React.useEffect(() => {
    if (selectedSpecies.includes('All Species')) {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(
        characters.filter((character) =>
          selectedSpecies.includes(character.species),
        ),
      );
    }
  }, [characters, selectedSpecies]);

  const handleChipClick = (species) => {
    if (species === 'All Species') {
      setSelectedSpecies(['All Species']);
    } else {
      setSelectedSpecies((prevSelected) => {
        const isSelected = prevSelected.includes(species);

        // Remove 'All Species' if other species are selected
        const newSelection = prevSelected.filter((s) => s !== 'All Species');
        return isSelected
          ? newSelection.filter((s) => s !== species)
          : [...newSelection, species];
      });
    }
    console.info(`You clicked the Chip: ${species}`);
  };

  // Сheck whether the current species is active, i.e. whether it is present in the selected Species array
  const isActive = (species) => selectedSpecies.includes(species);

  console.log('Selected species: ', selectedSpecies);
  console.log('Filtered characters: ', filteredCharacters);

  if (error) return <ErrorDisplay message={error.message} />;
  if (!data) return <LoadingDisplay />;

  return (
    <Box textAlign='center'>
      {!queryParams ? (
        <>
          <Typography variant='h1' sx={header1Styles}>
            The Rick and Morty Characters
          </Typography>
          <SpeciesChips
            speciesList={species}
            isActive={isActive}
            handleChipClick={handleChipClick}
          />
        </>
      ) : characters.length ? (
        <Typography variant='h2' sx={header2Styles}>
          Found characters
        </Typography>
      ) : null}

      <Cards characterList={filteredCharacters} />
      {characters.length ? (
        <Typography variant='subtitle2' margin={5}>
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
              determinate
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
