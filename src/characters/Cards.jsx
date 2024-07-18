import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Container, Grid } from '@mui/material';

const Cards = ({ characterList}) => {
  if (currentCount === 0) return <h4>Characters were not found.</h4>;

  return (
    <>
      <Grid container spacing={4} justifyContent='center'>
        {characterList.map(({ id, name, image }) => (
          <Grid key={id} item xs={10} sm={6} md={4} lg={3} xl={2.2}> // column numbers should be a digit without points xl={2.2}
            <Card
              name={name}
              image={image}
            />
          </Grid>
        ))}
      </Grid>

      // https://mui.com/material-ui/react-typography/#system-props
   
    </>
  );
};

Cards.propTypes = {
  characterList: PropTypes.arrayOf.isRequired,
};

export default Cards;
