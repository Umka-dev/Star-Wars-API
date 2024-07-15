import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { List } from '@mui/material';

const Cards = ({ characterList, countCharacters }) => {
  if (countCharacters === 0) return <h4>Characters were not found.</h4>;

  return (
    <div>
      <p>Characters shoun: {countCharacters}</p>
      <List>
        {characterList.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </List>
    </div>
  );
};

Cards.propTypes = {
  characterList: PropTypes.arrayOf.isRequired,
  countCharacters: PropTypes.number,
};

export default Cards;
