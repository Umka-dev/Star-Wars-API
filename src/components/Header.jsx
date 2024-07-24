import React from 'react';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { commonStyles } from '../constants';
import { SearchBar } from './characters';

const Header = () => {
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
            <SearchBar />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
