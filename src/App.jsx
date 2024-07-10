import React, { useState } from 'react';
// import './App.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import Card from './Card';

const StyledTypography = styled(Typography)`
  && {
    font-size: 2rem; /* Default size */
    font-weight: normal;
    margin-top: 56px;

    @media (min-width: 600px) {
      font-size: 2.5rem; /* Size for sm screens */
    }

    @media (min-width: 960px) {
      font-size: 3rem; /* Size for md screens */
    }

    @media (min-width: 1280px) {
      font-size: 3.5rem; /* Size for lg screens */
    }

    @media (min-width: 1920px) {
      font-size: 4rem; /* Size for xl screens */
    }
  }
`;
const initialCards = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  image: `https://via.placeholder.com/150?text=Card+${i + 1}`,
}));

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    const newCards = Array.from({ length: 10 }, (_, i) => ({
      id: cards.length + i + 1,
      title: `Card ${cards.length + i + 1}`,
      image: `https://via.placeholder.com/150?text=Card+${cards.length + i + 1}`,
    }));
    setCards([...cards, ...newCards]);
  };

  return (
    <Container>
      <GlobalStyles
        styles={{
          body: {
            margin: '0',
            backgroundColor: '#282c34',
            color: '#fff',
          },
        }}
      />
      <StyledTypography variant='h1' align='center' gutterBottom>
        Star Wars Characters
      </StyledTypography>
      <Grid container spacing={2}>
        {cards.slice(0, visibleCount).map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <Card title={card.title} image={card.image} />
          </Grid>
        ))}
      </Grid>
      {visibleCount < cards.length && (
        <Button
          variant='contained'
          color='primary'
          onClick={() => setVisibleCount(visibleCount + 10)}
        >
          Load More
        </Button>
      )}
      <Button variant='contained' color='secondary' onClick={loadMore}>
        Add More Cards
      </Button>
    </Container>
  );
};

export default App;
