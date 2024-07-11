import React from 'react';

const Card = ({ title, image }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </li>
  );
};

export default Card;
