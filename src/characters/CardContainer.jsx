import React, { useState, useEffect, useCallback } from 'react';
import Cards from './Cards';
import { Button, Container, Typography, CircularProgress } from '@mui/material';

const API_URL = 'https://rickandmortyapi.com/api/character/?page=1';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [next, setNext] = useState(API_URL);

  const fetchCharacters = useCallback(async () => {
    if (!next) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(next);
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
        console.log('Total count ' + count);
      }
      setNext(newNext);
      setLoading(false);
      // }, 1000);
    } catch (error) {
      // setTimeout(() => {
      console.error('Fetch error: ', error);
      setError(error);
      setLoading(false);
      // }, 1000);
      // throw error;
    }
  }, [next]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log('characters ' + characters.length);
  console.log('loading ' + loading);
  console.log('error ' + error);
  console.log('new next ' + next);

  if (loading) {
    console.log('Loading state active');
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
        <CircularProgress size={50} determinate value={20} thickness={4} />
        {/* <Typography variant='h5'>Loading...</Typography> */}
      </Container>
    );
  }
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

      <Cards
        characterList={characters}
        currentCount={characters.length}
        totalCount={totalCount}
      />
      {next && (
        <Button
          variant='outlined'
          sx={{
            color: 'white',
            borderColor: 'white',
            marginBottom: '100px',
            ':hover': { color: '#1976d2' },
          }}
          onClick={fetchCharacters}
        >
          Load more
        </Button>
      )}
    </Container>
  );
};

export default CardContainer;
