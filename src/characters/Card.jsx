import React from 'react';
import {
  CardMedia,
  Card as MuiCard,
  CardContent,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const Card = ({ name, image }) => {
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        ':hover': {
          opacity: '80%',
        },
      }}
    >
      <CardMedia component='img' height='250' src={image} alt={name} />
      <CardContent>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
