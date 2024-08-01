import React from 'react';
import { Box, Stack, Chip } from '@mui/material';

import { commonStyles } from '../../constants';

const SpeciesChips = ({ speciesList, selectedSpecies, handleChipClick }) => {
  const isSelected = (species, idx) => {
    if (idx === 0 && !selectedSpecies.length) {
      return true;
    }

    return selectedSpecies.includes(species);
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
        sx={{ rowGap: 2 }}
      >
        {speciesList.map((species, idx) => (
          <Chip
            key={species}
            label={species}
            variant={isSelected(species, idx) ? 'filled' : 'outlined'}
            color={isSelected(species, idx) ? 'primary' : 'default'}
            sx={{ color: commonStyles.primaryTextColor }}
            clickable
            onClick={() => handleChipClick(species)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SpeciesChips;
