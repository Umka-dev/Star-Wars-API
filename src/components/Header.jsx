import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
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
          component={RouterLink}
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
