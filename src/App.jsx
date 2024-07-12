import React from 'react';
import './App.css';
import CardContainer from './characters/CardContainer';

const App = () => {
  return (
    <div className='App-header'>
      <h1>The Rick and Morty Characters</h1>
      <CardContainer />
    </div>
  );
};

export default App;
