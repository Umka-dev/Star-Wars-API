import React, { useState, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import {
  Cards,
  ErrorDisplay,
  LoadingDisplay,
  header1Styles,
  header2Styles,
} from './';

import { fetcher } from '../../utils';
import { commonStyles, CHARACTER_API_URL } from '../../constants';

const CardContainer = ({ queryParams }) => {
  const [characters, setCharacters] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [hasNextPage, setHasNextPage] = useState('');

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

  if (error) return <ErrorDisplay message={error.message} />;
  if (!data) return <LoadingDisplay />;

  return (
    <Box textAlign='center'>
      {!queryParams ? (
        <Typography variant='h1' sx={header1Styles}>
          All The Rick and Morty Characters
        </Typography>
      ) : characters.length ? (
        <Typography variant='h2' sx={header2Styles}>
          Found characters
        </Typography>
      ) : null}

      <Cards characterList={characters} />
      {characters.length ? (
        <Typography variant='subtitle2' margin={5}>
          Characters shown {characters.length} from {totalCount}
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
