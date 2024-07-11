import React from 'react';
import Card from './Card';

const Cards = ({ characterList }) => {
  if (characterList.length === 0) return <h4>Characters were not found.</h4>;

  return (
    <ul>
      {characterList.map((character) => (
        <Card
          title={character.name}
          key={character.id}
          image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
        />
      ))}
    </ul>
  );
};

export default Cards;
