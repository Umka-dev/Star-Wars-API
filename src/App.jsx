import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import CardContainer from './characters/CardContainer';
import CharacterDetails from './characters/CharacterDetails';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Box
          component='body'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#282c34',
            color: 'white',
            fontSize: 'calc(10px + 2vmin)',
          }}
        >
          <Routes>
            <Route path='/' element={<CardContainer />} />
            <Route path='/character/:id' element={<CharacterDetails />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </>
  );
};

export default App;
