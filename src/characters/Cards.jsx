import React from 'react';
import Card from './Card';

const Cards = ({ characterList }) => {
  if (characterList.length === 0) return <h4>Characters were not found.</h4>;

  return (
    <ul>
      {characterList.map((character) => (
        <Card
          title={character.name}
          key={character.url}
          image={`https://via.placeholder.com/150?text=${encodeURIComponent(character.name)}`}
        />
      ))}
    </ul>
  );
};

export default Cards;
