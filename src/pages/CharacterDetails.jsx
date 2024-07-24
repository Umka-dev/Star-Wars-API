import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  ErrorDisplay,
  LoadingDisplay,
  header2Styles,
} from '../components/characters';

import { fetcher } from '../utils';
import { commonStyles, CHARACTER_API_URL } from '../constants';

const CharacterDetails = () => {
  const { id } = useParams();
  const { data: character, error } = useSWR(
    `${CHARACTER_API_URL}${id}`,
    fetcher,
  );

  if (error) return <ErrorDisplay message={error.message} />;
  if (!character) return <LoadingDisplay />;

  const characterAttributes = [
    { label: 'Status:', value: character.status },
    { label: 'Species:', value: character.species },
    { label: 'Gender:', value: character.gender },
    { label: 'Origin:', value: character.origin.name },
    { label: 'Location:', value: character.location.name },
  ];

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      mt={2}
    >
      <Typography variant='h1' sx={header2Styles}>
        {character.name}
      </Typography>
      <Avatar
        src={character.image}
        alt={character.name}
        sx={{
          width: '20%',
          minWidth: '240px',
          height: 'auto',
          margin: '20px',
        }}
      />
      <List>
        {characterAttributes.map(({ label, value }) => (
          <ListItem key={label}>
            <ListItemText
              primary={label}
              secondary={value}
              secondaryTypographyProps={{
                color: commonStyles.secondaryTextColor,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CharacterDetails;
