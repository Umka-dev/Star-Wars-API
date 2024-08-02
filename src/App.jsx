import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { HomePage, SearchResults, CharacterDetails } from './pages';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search/' element={<SearchResults />} />
          <Route path='/character/:id' element={<CharacterDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
