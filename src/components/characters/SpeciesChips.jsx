import React from 'react';
import { Box, Stack, Chip } from '@mui/material';

import { commonStyles } from '../../constants';

const SpeciesChips = ({ speciesList, selectedSpecies, handleChipClick }) => {
  const isSelected = (speciesName, idx) => {
    if (idx === 0 && !selectedSpecies.length) {
      return true;
    }

    return selectedSpecies.includes(speciesName);
  };

  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='center'
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
        {speciesList.map((speciesName, idx) => (
          <Chip
            key={speciesName}
            label={speciesName}
            variant={isSelected(speciesName, idx) ? 'filled' : 'outlined'}
            color={isSelected(speciesName, idx) ? 'primary' : 'default'}
            sx={{ color: commonStyles.primaryTextColor }}
            clickable='true'
            onClick={() => handleChipClick(speciesName)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SpeciesChips;
