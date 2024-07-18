import React, { useState, useEffect, useCallback } from 'react';
import Cards from './Cards';
import { Button, Container, Typography, CircularProgress } from '@mui/material';
import { commonStyles, CHARACTER_API_URL } from '../../constants';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(`${CHARACTER_API_URL}?page=1`);

  const fetchCharacters = useCallback(async () => {
    if (!nextPageUrl) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(nextPageUrl);
      if (!response.ok) {
        throw new Error(
          `Network response was not ok! Status: ${response.status}`,
        );
      }
      const {
        info: { next: newNext, count },
        results,
      } = await response.json();
      // setTimeout(() => {
      setCharacters((prevCharacters) => [...prevCharacters, ...results]);
      if (!totalCount) {
        setTotalCount(count);
      }
      setNextPageUrl(newNext);
      setLoading(false);
      // }, 1000);
    } catch (error) {
      console.error('Fetch error: ', error);
      setError(error);
      setLoading(false);
    }
  }, [nextPageUrl]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleLoadMore = () => {
    fetchCharacters();
  };

  if (error)
    return (
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          marginTop: '20px',
        }}
      >
        <Typography variant='h5'>Error: {error.message}</Typography>
      </Container>
    );

  return (
    <Container maxWidth='xl' align='center'>
      <Typography
        variant='h1'
        align='center'
        sx={{
          fontSize: {
            xs: '2rem', // small screens
            sm: '2.5rem', // medium screens
            md: '3rem', // large screens
            lg: '3.5rem', // extra large screens
            xl: '4rem', // double extra large screens
          },
          margin: {
            xs: '80px 0 20px 0',
            sm: '80px 0 30px 0',
            md: '80px 0 40px 0',
            lg: '80px 0 60px 0',
            xl: '80px 0 80px 0',
          },
        }}
      >
        The Rick and Morty Characters
      </Typography>

      <Cards characterList={characters} />
      <Typography variant='subtitle2' margin={5}>
        Characters shown {characters.length} from {totalCount}
      </Typography>
      {nextPageUrl && (
        <Button
          variant='outlined'
          sx={{
            color: commonStyles.textColor,
            borderColor: 'white',
            marginBottom: '100px',
            ':hover': { color: '#1976d2' },
          }}
          onClick={handleLoadMore}
        >
          Load more
        </Button>
      )}
      {loading && (
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
            marginTop: '20px',
          }}
        >
          <CircularProgress size={50} determinate value={20} thickness={4} />
        </Container>
      )}
    </Container>
  );
};

export default CardContainer;
