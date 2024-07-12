import React from 'react';

const Card = ({ name, image }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </li>
  );
};

export default Card;
