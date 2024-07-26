import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

import { commonStyles } from '../../constants';

const SearchBar = () => {
  const [searchName, setSearchName] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchName(value);
  };

  const handleSearch = () => {
    navigate(`/search/?name=${searchName.toLowerCase()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <TextField
        id='standard-size-small'
        label='Input name'
        variant='standard'
        size='small'
        value={searchName}
        onChange={handleChange}
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
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  );
};

export default SearchBar;
