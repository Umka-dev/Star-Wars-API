import React from 'react';
import useSWRInfinite from 'swr/infinite';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import Cards from './Cards';
import ErrorDisplay from './ErrorDisplay';
import LoadingDisplay from './LoadingDisplay';

import { commonStyles, CHARACTER_API_URL } from '../../constants';
import { headerStyles } from './typographyStyles';

const fetcher = (url) => fetch(url).then((res) => res.json());

const CardContainer = () => {
  const getKey = (pageIndex, prevCharacters) => {
    if (prevCharacters && !prevCharacters.info.next) return null;
    return prevCharacters ? prevCharacters.info.next : CHARACTER_API_URL;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  if (error) return <ErrorDisplay message={error.message} />;
  if (!data) return <LoadingDisplay />;

  const characters = data.flatMap((charactersData) => charactersData.results);
  const totalCount = data[0]?.info.count;
  const hasNextPage = data[data.length - 1]?.info.next;

  return (
    <Box align='center'>
      <Typography variant='h1' align='center' sx={headerStyles}>
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
            color: commonStyles.textColor,
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
