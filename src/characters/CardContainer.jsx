import React, { useState, useEffect } from 'react';
import { characters } from '../data/characters_data';
// import Cards from './Cards';

const fetchCharacters = () => {
  return characters;
};

const CardContainer = () => {
  // console.log(fetchCharacters());
  const [characters, setCharacters] = useState([]);
  // const imgPlaceholder = `https://via.placeholder.com/150?text=${encodeURIComponent(character.name)}`;

  useEffect(() => {
    const newCharacters = fetchCharacters();
    setCharacters(newCharacters);
  }, []);

  return (
    <>
      <h2>Card Container - Star Wars Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.url}>
            <img
              src={`https://via.placeholder.com/150?text=${encodeURIComponent(character.name)}`}
              alt={character.name}
            />
            <h3>{character.name}</h3>
          </li>
        ))}
      </ul>
      {/* 
      <Cards
        title={character.name}
        image={`https://via.placeholder.com/150?text=${encodeURIComponent(character.name)}`
        key={character.url}
      /> */}
    </>
  );
};

export default CardContainer;
