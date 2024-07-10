import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const Card = ({ title, image }) => (
  <MuiCard>
    <CardMedia component='img' height='150' image={image} alt={title} />
    <CardContent>
      <Typography variant='h5' component='div'>
        {title}
      </Typography>
    </CardContent>
  </MuiCard>
);

export default Card;
