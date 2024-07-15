import React from 'react';
import { ListItem } from '@mui/material';
import PropTypes from 'prop-types';

const Card = ({ name, image }) => {
  return (
    <ListItem>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </ListItem>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
