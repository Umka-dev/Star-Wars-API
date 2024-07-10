import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const Card = ({ title, image }) => (
  <MuiCard>
    <CardMedia
      component='img'
      height='150'
      width='150'
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography variant='h5' component='div'>
        {title}
      </Typography>
    </CardContent>
  </MuiCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
