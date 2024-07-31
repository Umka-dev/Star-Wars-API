import React from 'react';
import { Box, Stack, Chip } from '@mui/material';

import { commonStyles } from '../../constants';

const SpeciesChips = ({ speciesList }) => {
  const [selectedChips, setSelectedChips] = React.useState('All Species');

  const handleClickAll = () => {
    setSelectedChips('All Species');
    console.info('You clicked the Chip All');
    return;
  };

  const handleChipClick = (species) => {
    setSelectedChips(species);
    console.info(`You clicked the Chip: ${species}`);
  };

  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='center'
      alignItems='center'
      p={2}
      sx={{
        my: {
          sm: '8px',
          md: '12px',
          lg: '16px',
          xl: '20px',
        },
      }}
    >
      <Stack
        direction='row'
        flexWrap='wrap'
        spacing={{ xs: 1, sm: 2 }}
        sx={{ rowGap: { xs: 1 } }}
      >
        <Chip
          label='All Species'
          color={selectedChips === 'All Species' ? 'primary' : 'default'}
          variant={selectedChips === 'All Species' ? 'filled' : 'outlined'}
          clickable={true}
          onClick={() => handleClickAll('All Species')}
          sx={{
            backgroundColor:
              selectedChips === 'All Species' ? 'primary.main' : 'transparent',
            color:
              selectedChips === 'All Species'
                ? 'primary.contrastText'
                : commonStyles.primaryTextColor,
          }}
        />
        {speciesList.map((species) => (
          <Chip
            key={species}
            label={species}
            variant={selectedChips === species ? 'filled' : 'outlined'}
            sx={{
              backgroundColor:
                selectedChips === species ? 'primary.main' : 'transparent',
              color:
                selectedChips === species
                  ? 'primary.contrastText'
                  : commonStyles.primaryTextColor,
            }}
            clickable={true}
            onClick={() => handleChipClick(species)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SpeciesChips;
