import React from 'react';
import Card from './Card';

const Cards = ({ characterList }) => {
  if (characterList.length === 0) return <h4>Characters were not found.</h4>;

  return (
    <div>
      <ul>
        {characterList.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
