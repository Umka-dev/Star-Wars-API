import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import { CHARACTER_API_URL } from '../../constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const CharacterDetails = () => {
  const { id } = useParams();
  const {
    data: character,
    loading,
    error,
  } = useSWR(`${CHARACTER_API_URL}${id}`, fetcher);

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
        sx={{ width: '20%', minWidth: '300px', height: 'auto', margin: '20px' }}
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

export default CharacterDetails;
