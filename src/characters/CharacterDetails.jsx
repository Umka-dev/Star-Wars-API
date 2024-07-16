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
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!character) return <p>No character found.</p>;

  console.log('ID: ' + id);
  console.log('Character: ', character);
  console.log('Character name: ' + character.name);

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4'>{character.name}</Typography>
      <img src={character.image} alt={character.name} />
      <Typography variant='body1'>Status: {character.status}</Typography>
      <Typography variant='body1'>Species: {character.species}</Typography>
      <Typography variant='body1'>Gender: {character.gender}</Typography>
      <Typography variant='body1'>Origin: {character.origin.name}</Typography>
    </Container>
  );
};

export default CharacterDetails;
