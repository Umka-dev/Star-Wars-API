import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { commonStyles } from '../constants';

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
        textAlign: 'center',
        backgroundColor: commonStyles.backgroundColor,
      }}
    >
      <Toolbar>
        <Typography
          variant='h6'
          component={RouterNavLink}
          onClick={scrollToTop}
          to='/'
          sx={{
            color: commonStyles.textColor,
            textDecoration: 'none',
            '&:hover': {
              color: '#1976d2',
            },
            '&:active': {
              color: commonStyles.textColor,
            },
          }}
        >
          Home
        </Typography>
        {/* Additional elements of header */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
