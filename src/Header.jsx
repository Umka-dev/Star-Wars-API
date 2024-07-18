import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar
      component='nav'
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

{
  /* <AppBar
          component='nav'
          position='fixed'
          sx={{
            boxShadow: 'none',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#282c34',
          }}
        >
          <Toolbar>
            <MuiLink
              component={RouterLink}
              to='/'
              sx={{
                // minWidth: 100,
                // height: '20px',
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
            </MuiLink>
          </Toolbar>
        </AppBar> */
}
