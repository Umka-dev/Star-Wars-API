import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://rickandmortyapi.com/api/character/';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacter = async () => {
    try {
      const response = await fetch(`${API_URL}${id}`);
      console.log('ID: ' + id);
      if (!response.ok) {
        throw new Error(
          `Network response was not ok! Status: ${response.status}`,
        );
      }
      const apiCharacterData = await response.json();
      setCharacter(apiCharacterData);
      setLoading(false);
    } catch (error) {
      console.error('Fetch error: ', error);
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  console.log('ID: ' + id);
  console.log('loading ' + loading);
  console.log('error ' + error);
  console.log('Character: ' + character);
  console.log('Character name: ' + character.name);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!character) {
    return <p>No character found.</p>;
  }

  return (
    <Container>
      <Typography variant='h4'>{character.name}</Typography>
    </Container>
  );
};

export default CharacterDetails;
