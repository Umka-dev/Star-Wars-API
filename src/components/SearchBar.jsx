import React from 'react';
import { TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useCharactersContext } from '../context/CharactersContext';

const SearchBar = () => {
  const { filters, handleNameChange, handleSearchNavigate, handleKeyDown } =
    useCharactersContext();

  const { palette } = useTheme();
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
              borderBottomColor: palette.common.white,
            },
            '&:after': {
              borderBottomColor: palette.primary.main,
            },
            input: {
              color: palette.common.white,
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: palette.common.white,
          },
        }}
      />
      <Button
        variant='outlined'
        sx={{
          color: palette.common.white,
          borderColor: palette.common.white,
          ':hover': { color: palette.primary.main },
        }}
        onClick={handleSearchNavigate}
      >
        Search
      </Button>
    </>
  );
};

export default SearchBar;
