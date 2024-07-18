import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';
import { NavLink as RouterNavLink } from 'react-router-dom';

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
        backgroundColor: '#282c34',
      }}
    >
      <Toolbar>
        <Typography
          variant='h6'
          component={RouterNavLink}
          onClick={scrollToTop}
          to='/'
          sx={{
            // flexGrow: 1,
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
              color: '#1976d2',
            },
            '&:active': {
              color: 'white',
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
