import React, { useState, useEffect } from 'react';
import { characters } from '../data/characters_data';
import Cards from './Cards';

const fetchCharacters = () => {
  return characters;
};

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const newCharacters = fetchCharacters();
    setCharacters(newCharacters);
  }, []);

  return (
    <div>
      <Cards characterList={characters} />
      <button>Load more</button>
    </div>
  );
};

export default CardContainer;
