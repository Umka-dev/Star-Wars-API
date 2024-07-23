import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Stack,
  Button,
} from '@mui/material';
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
        p: '5px',
        backgroundColor: commonStyles.backgroundColor,
      }}
    >
      <Toolbar sx={{ maxHeight: '60px' }}>
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
              onClick={null}
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
