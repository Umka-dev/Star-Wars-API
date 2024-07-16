import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Container, Grid, Typography } from '@mui/material';

const Cards = ({ characterList, currentCount, totalCount }) => {
  if (currentCount === 0) return <h4>Characters were not found.</h4>;

  return (
    <Container maxWidth='xl' align='center'>
      <Grid container spacing={4} justifyContent='center'>
        {characterList.map((character) => (
          <Grid key={character.id} item xs={10} sm={6} md={4} lg={3} xl={2.2}>
            <Card
              id={character.id}
              name={character.name}
              image={character.image}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant='subtitle2' sx={{ margin: '30px' }}>
        Characters shoun {currentCount} from {totalCount}
      </Typography>
    </Container>
  );
};

Cards.propTypes = {
  characterList: PropTypes.arrayOf.isRequired,
  currentCount: PropTypes.number,
  totalCount: PropTypes.number,
};

export default Cards;
