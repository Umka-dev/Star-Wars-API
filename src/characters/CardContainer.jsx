import React, { useState, useEffect, useCallback } from 'react';
import Cards from './Cards';
import { Button, Container } from '@mui/material';

const API_URL = 'https://rickandmortyapi.com/api/character/?page=1';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(API_URL);

  const fetchCharacters = useCallback(async () => {
    if (!next) {
      return;
    }
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

      setCharacters((prevCharacters) => [...prevCharacters, ...results]);
      if (!totalCount) {
        setTotalCount(count);
        console.log('Total count ' + count);
      }
      setNext(newNext);
      setLoading(false);
    } catch (error) {
      console.error('Fetch error: ', error);
      setError(error);
      setLoading(false);
      throw error;
    }
  }, [next]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log('characters ' + characters.length);
  console.log('loading ' + loading);
  console.log('error ' + error);
  console.log('new next ' + next);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container maxWidth='xl' align='center'>
      <Cards
        characterList={characters}
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
