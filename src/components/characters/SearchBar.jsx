import React from 'react';
import { TextField, Button } from '@mui/material';

import { useCharactersContext } from '../../context/CharactersContext';
import { commonStyles } from '../../constants';

const SearchBar = () => {
  const { filters, handleNameChange, handleSearchNavigate, handleKeyDown } =
    useCharactersContext();
  return (
    <>
      <TextField
        label='Input name'
        variant='standard'
        size='small'
        value={filters.name}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          sx: {
            '&:before': {
              borderBottomColor: commonStyles.borderColor,
            },
            '&:after': {
              borderBottomColor: commonStyles.linkColor,
            },
            input: {
              color: commonStyles.primaryTextColor,
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: commonStyles.primaryTextColor,
          },
        }}
      />
      <Button
        variant='outlined'
        sx={{
          color: commonStyles.primaryTextColor,
          borderColor: commonStyles.borderColor,
          ':hover': { color: commonStyles.linkColor },
        }}
        onClick={handleSearchNavigate}
      >
        Search
      </Button>
    </>
  );
};

export default SearchBar;
