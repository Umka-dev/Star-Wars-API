import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
import CardContainer from './characters/CardContainer';
import CharacterDetails from './characters/CharacterDetails';
import {
  Link as MuiLink,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';

const App = () => {
  return (
    <div>
      <Router>
        <AppBar
          component='nav'
          position='fixed'
          sx={{
            height: '50px !important',
            minHeight: '50px !important',
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
                minWidth: 100,
                height: '20px',
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
        </AppBar>
        <Box
          component='body'
          sx={{
            backgroundColor: '#282c34',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)',
            color: 'white',
          }}
        >
          <Routes>
            <Route path='/' element={<CardContainer />} />
            <Route path='/character/:id' element={<CharacterDetails />} />
          </Routes>
          <Box
            component='footer'
            sx={{
              py: 3, //	padding-top, padding-bottom
              px: 2, //	padding-left, padding-right
              mt: 'auto', //margin-top
            }}
          >
            <Typography
              variant='body'
              sx={{
                fontSize: '14px',
                margin: '50px auto 50px auto',
                color: '#ccc',
              }}
            >
              © Made by Umka-dev with💙
            </Typography>
          </Box>
        </Box>
      </Router>
    </div>
  );
};

export default App;
