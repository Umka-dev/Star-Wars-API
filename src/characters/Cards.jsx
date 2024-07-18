import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Grid, Typography } from '@mui/material';

const Cards = ({ characterList }) => {
  if (characterList.length === 0) return;
  <Typography variant='h4' mt={100}>
    Characters were not found.
  </Typography>;

  return (
    <>
      <Grid container spacing={4} justifyContent='center'>
        {characterList.map(({ id, name, image }) => (
          <Grid key={id} item xs={10} sm={6} md={4} lg={3} xl={2.2}>
            <Card name={name} image={image} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Cards.propTypes = {
  characterList: PropTypes.arrayOf.isRequired,
};

export default Cards;
