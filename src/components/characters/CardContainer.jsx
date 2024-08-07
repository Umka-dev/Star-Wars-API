import React from 'react';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { Cards, ErrorDisplay, LoadingDisplay } from './';

import { useCharactersContext } from '../../context/CharactersContext';
import { commonStyles } from '../../constants';

const CardContainer = () => {
  const {
    error,
    totalCount,
    hasNextPage,
    handleNextPage,
    isValidating,
    filteredCharacters,
  } = useCharactersContext();

  if (error) return <ErrorDisplay />;
  if (!filteredCharacters) return <LoadingDisplay />;

  return (
    <Box textAlign='center'>
      <Cards />
      {!!filteredCharacters.length && (
        <Typography variant='subtitle2' m={6}>
          Characters shown {filteredCharacters.length} from {totalCount}
        </Typography>
      )}

      {hasNextPage && (
        <Button
          variant='outlined'
          sx={{
            color: commonStyles.primaryTextColor,
            borderColor: commonStyles.borderColor,
            marginBottom: '100px',
            ':hover': { color: commonStyles.linkColor },
          }}
          onClick={handleNextPage}
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
