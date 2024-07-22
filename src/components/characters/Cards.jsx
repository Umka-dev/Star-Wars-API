import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Box, Typography } from '@mui/material';

const Cards = ({ characterList }) => {
  if (!characterList.length) {
    console.log('Characters were not found.');
    return (
      <Typography variant='h4' mt={100}>
        Characters were not found.
      </Typography>
    );
  }

  return (
    <Box
      gap={4}
      display='grid'
      sx={{
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)', // 1 column on extra-small screens
          sm: 'repeat(2, 1fr)', // 2 columns on small screens
          md: 'repeat(3, 1fr)', // 3 columns on medium screens
          lg: 'repeat(4, 1fr)', // 4 columns on large screens
          xl: 'repeat(5, 1fr)', // 5 columns on extra-large screens
        },
      }}
    >
      {characterList.map(({ id, name, image }) => (
        <Card key={id} id={id} name={name} image={image} />
      ))}
    </Box>
  );
};

Cards.propTypes = {
  characterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Cards;
