import React from 'react';
import { Box, Stack, Chip } from '@mui/material';

import { commonStyles } from '../../constants';

const SpeciesChips = ({ speciesList }) => {
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
      <Stack direction='row' flexWrap='wrap' spacing={{ xs: 1, sm: 2 }}>
        <Chip label='All Species' color='primary' clickable onClick={null} />
        {speciesList.map((species) => (
          <Chip
            key={species}
            label={species}
            variant='outlined'
            sx={{ color: commonStyles.primaryTextColor }}
            clickable
            onClick={null}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SpeciesChips;
