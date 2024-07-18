import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CardContainer from './components/characters/CardContainer';
import CharacterDetails from './components/characters/CharacterDetails';

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<CardContainer />} />
            <Route path='/character/:id' element={<CharacterDetails />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
