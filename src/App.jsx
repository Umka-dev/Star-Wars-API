import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryParamsProvider } from './context/QueryParamsContext';
import Layout from './components/Layout';
import { HomePage, SearchResults, CharacterDetails } from './pages';

const App = () => {
  return (
    <Router>
      <Layout>
        <QueryParamsProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search/' element={<SearchResults />} />
            <Route path='/character/:id' element={<CharacterDetails />} />
          </Routes>
        </QueryParamsProvider>
      </Layout>
    </Router>
  );
};

export default App;
