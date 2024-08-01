import React from 'react';
import { Box, Stack, Chip } from '@mui/material';

import { commonStyles } from '../../constants';

const SpeciesChips = ({ speciesList, isActive, handleChipClick }) => {
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
        <Chip
          label='All Species'
          variant={isActive('All Species') ? 'filled' : 'outlined'}
          color={isActive('All Species') ? 'primary' : 'default'}
          sx={{ color: commonStyles.primaryTextColor }}
          clickable
          onClick={() => handleChipClick('All Species')}
        />
        {speciesList.map((species) => (
          <Chip
            key={species}
            label={species}
            variant={isActive(species) ? 'filled' : 'outlined'}
            color={isActive(species) ? 'primary' : 'default'}
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
