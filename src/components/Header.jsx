import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Stack,
  Button,
} from '@mui/material';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';

import { commonStyles } from '../constants';

const Header = () => {
  const [searchName, setSearchName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchName(value);
    // console.log('Input: ' + value);
  };

  // console.log('Inputed name: ' + searchName);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchName) {
      navigate(`/search/${searchName}`);
      setSearchName('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar
      component='header'
      position='fixed'
      sx={{
        boxShadow: 'none',
        alignItems: 'center',
        p: '5px',
        backgroundColor: commonStyles.backgroundColor,
      }}
    >
      <Toolbar>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 0, sm: 6, md: 10, lg: 16, xl: 20 }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography
            variant='h6'
            component={RouterNavLink}
            onClick={scrollToTop}
            to='/'
            color={commonStyles.primaryTextColor}
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: commonStyles.linkColor,
              },
              '&:active': {
                color: commonStyles.primaryTextColor,
              },
            }}
          >
            Home
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2 }}
          >
            <TextField
              id='standard-size-small'
              label='Input name'
              variant='standard'
              size='small'
              value={searchName}
              onChange={handleChange}
              InputProps={{
                sx: {
                  '&:before': {
                    borderBottomColor: 'white',
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
                borderColor: 'white',
                ':hover': { color: commonStyles.linkColor },
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
