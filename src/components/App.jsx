import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { CardContainer, CharacterDetails, SearchCharacter } from './characters';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<CardContainer />} />
          <Route path='/search/:name' element={<SearchCharacter />} />
          <Route path='/character/:id' element={<CharacterDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
