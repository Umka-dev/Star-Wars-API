import {
  Avatar,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';
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
    console.log('Fetching character with id:', id);
  };

  useEffect(() => {
    if (id) {
      fetchCharacter();
    } else {
      setLoading(false);
      setError(new Error('No character ID provided.'));
    }
  }, [id]);

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
  if (!character)
    return (
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          marginTop: '60px',
        }}
      >
        <Typography variant='h5'>No character found.</Typography>
      </Container>
    );

  console.log('ID: ' + id);
  console.log('Character: ', character);
  console.log('Character name: ' + character.name);

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        marginTop: '80px',
      }}
    >
      <Typography variant='h4' gutterBottom>
        {character.name}
      </Typography>
      <Avatar
        src={character.image}
        alt={character.name}
        sx={{ width: '20%', minWidth: '200px', height: 'auto', margin: '20px' }}
      />
      <List>
        <ListItem>
          <ListItemText
            primary='Status:'
            secondary={character.status}
            secondaryTypographyProps={{ sx: { color: '#ccc' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Species:'
            secondary={character.species}
            secondaryTypographyProps={{ sx: { color: '#ccc' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Gender:'
            secondary={character.gender}
            secondaryTypographyProps={{ sx: { color: '#ccc' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Origin:'
            secondary={character.origin.name}
            secondaryTypographyProps={{ sx: { color: '#ccc' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Location:'
            secondary={character.location.name}
            secondaryTypographyProps={{ sx: { color: '#ccc' } }}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default CharacterDetails;
