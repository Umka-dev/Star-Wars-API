import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  Card as MuiCard,
  CardContent,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const Card = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/character/${id}`);
  };

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        borderRadius: '20px',
        ':hover': {
          opacity: '80%',
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia component='img' height='240' src={image} alt={name} />
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
      </CardContent>
    </MuiCard>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
