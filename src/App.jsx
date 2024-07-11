import React, { useState, useEffect } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress,
} from '@mui/material';
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

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
        console.log(loading);
      } catch (error) {
        setError(error.message);
        console.log('' + error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color='error'>{error}</Typography>
      </Container>
    );
  }

  const loadMore = () => {
    setVisibleCount(visibleCount + 10);
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
        {characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={characters.id}>
            <Card
              key={character.url}
              title={character.name}
              image={`https://via.placeholder.com/150?text=${encodeURIComponent(character.name)}`}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant='contained' color='primary' onClick={loadMore}>
        Load More
      </Button>
    </Container>
  );
};

export default App;
