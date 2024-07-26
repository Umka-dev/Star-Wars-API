import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import {
  // SearchBar,
  StatusRadioButtons,
  GenderCheckboxes,
} from '../components/characters';

import { commonStyles } from '../constants';

const FilterPanel = ({
  onStatusChange,
  status,
  onGenderChange,
  gender,
  onResetFilters,
  onApplyFilters,
}) => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' mt={14}>
      <Box
        position='fixed'
        display='flex'
        width='100%'
        justifyContent='center'
        alignItems='center'
        sx={{
          py: 1,
          margin: {
            xs: '280px 0 20px 0',
            sm: '110px 0 20px 0',
            md: '80px 0 30px 0',
            lg: '40px 0 30px 0',
            xl: '40px 0 30px 0',
          },
          borderRadius: '0 0 10px 10px',
          color: commonStyles.primaryTextColor,
          backgroundColor: commonStyles.backgroundColor,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 4, md: 6, lg: 8, xl: 10 }}
          alignItems='center'
          justifyContent='space-between'
        >
          {/* <SearchBar /> */}
          <StatusRadioButtons onChange={onStatusChange} status={status} />
          <GenderCheckboxes onChange={onGenderChange} gender={gender} />
          <Stack direction='row' spacing={2} justifyContent='flex-end'>
            <Button
              variant='outlined'
              sx={{
                color: commonStyles.primaryTextColor,
                borderColor: commonStyles.borderColor,
                ':hover': { color: commonStyles.linkColor },
              }}
              onClick={onResetFilters}
            >
              Reset
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={onApplyFilters}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FilterPanel;
