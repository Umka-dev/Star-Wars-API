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
import { ErrorDisplay, LoadingDisplay, header2Styles } from './index';

import { fetcher } from '../../utils';
import { commonStyles, CHARACTER_API_URL } from '../../constants';

const CharacterDetails = ({ searchedCharacter }) => {
  const { id } = useParams();

  const { data: character, error } = useSWR(
    id ? `${CHARACTER_API_URL}${id}` : null,
    fetcher,
  );

  if (error) return <ErrorDisplay message={error.message} />;
  if (!character && !searchedCharacter) return <LoadingDisplay />;

  const characterData = character || searchedCharacter;

  const characterAttributes = [
    { label: 'Status:', value: characterData.status },
    { label: 'Species:', value: characterData.species },
    { label: 'Gender:', value: characterData.gender },
    { label: 'Origin:', value: characterData.origin.name },
    { label: 'Location:', value: characterData.location.name },
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
        {characterData.name}
      </Typography>
      <Avatar
        src={characterData.image}
        alt={characterData.name}
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
