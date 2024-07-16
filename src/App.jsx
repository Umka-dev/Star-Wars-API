import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardContainer from './characters/CardContainer';
import CharacterDetails from './characters/CharacterDetails';

const App = () => {
  return (
    <div className='App-header'>
      <Router>
        <Routes>
          <Route path='/' component={CardContainer} />
          <Route path='/character/:id' component={CharacterDetails} />
        </Routes>
      </Router>
      <CardContainer />
    </div>
  );
};

export default App;
