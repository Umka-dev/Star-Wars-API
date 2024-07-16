import React from 'react';
import './App.css';
import CardContainer from './characters/CardContainer';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <div className='App-header'>
      <Typography
        variant='h1'
        align='center'
        sx={{
          fontSize: {
            xs: '2rem', // small screens
            sm: '2.5rem', // medium screens
            md: '3rem', // large screens
            lg: '3.5rem', // extra large screens
            xl: '4rem', // double extra large screens
          },
          margin: {
            xs: '20px 0',
            sm: '30px 0',
            md: '40px 0',
            lg: '50px 0',
            xl: '60px 0',
          },
        }}
      >
        The Rick and Morty Characters
      </Typography>
      <CardContainer />
    </div>
  );
};

export default App;
