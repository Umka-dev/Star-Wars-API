import React, { useState, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { Cards, ErrorDisplay, LoadingDisplay, header1Styles } from './index';

import { fetcher } from '../../utils';
import { commonStyles, CHARACTER_API_URL } from '../../constants';

const getKey = (_, prevCharacters) => {
  if (prevCharacters && !prevCharacters.info.next) return null;
  return prevCharacters ? prevCharacters.info.next : CHARACTER_API_URL;
};

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );

  useEffect(() => {
    if (data) {
      const allCharacters = data.flatMap(
        (charactersData) => charactersData.results,
      );
      setCharacters(allCharacters);
    }
  }, [data]);

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  if (error) return <ErrorDisplay message={error.message} />;
  if (!data) return <LoadingDisplay />;

  const totalCount = data[0]?.info.count;
  const hasNextPage = data[data.length - 1]?.info.next;

  return (
    <Box textAlign='center'>
      <Typography variant='h1' sx={header1Styles}>
        The Rick and Morty Characters
      </Typography>

      <Cards characterList={characters} />

      <Typography variant='subtitle2' margin={5}>
        Characters shown {characters.length} from {totalCount}
      </Typography>

      {hasNextPage && (
        <Button
          variant='outlined'
          sx={{
            color: commonStyles.primaryTextColor,
            borderColor: 'white',
            marginBottom: '100px',
            ':hover': { color: commonStyles.linkColor },
          }}
          onClick={handleLoadMore}
          disabled={isValidating} // Disable button while loading
        >
          {isValidating ? (
            <CircularProgress
              size={24}
              determinate
              value={20}
              thickness={4}
              sx={{
                color: 'white',
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
