import React from 'react';
import { Box, Stack, Button, TextField } from '@mui/material';
import { StatusRadioButtons, GenderRadioButtons } from '.';

import { commonStyles } from '../../constants';

const FilterPanel = ({
  onNameChange,
  name,
  onStatusChange,
  status,
  onGenderChange,
  gender,
  onApplyFilters,
  onResetFilters,
}) => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' mt={14}>
      <Box
        position='fixed'
        display='flex'
        width='100%'
        justifyContent='center'
        sx={{
          padding: {
            xs: '220px 16px 16px 16px',
            sm: '100px 16px 16px 16px',
            md: '100px 16px 16px 16px',
            lg: '60px 16px 16px 16px',
            xl: '20px 16px 16px 16px',
          },
          color: commonStyles.primaryTextColor,
          backgroundColor: commonStyles.backgroundColor,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 6, lg: 8, xl: 10 }}
          alignItems='center'
          px={2}
        >
          <TextField
            id='standard-size-small'
            label='Input name'
            variant='standard'
            size='small'
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            InputProps={{
              sx: {
                '&:before': {
                  borderBottomColor: commonStyles.borderColor,
                },
                '&:after': {
                  borderBottomColor: commonStyles.linkColor,
                },
                input: {
                  color: commonStyles.primaryTextColor,
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: commonStyles.primaryTextColor,
              },
            }}
            sx={{ minWidth: '150px' }}
          />
          <StatusRadioButtons onChange={onStatusChange} status={status} />
          <GenderRadioButtons onChange={onGenderChange} gender={gender} />
          <Stack direction='row' spacing={2}>
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
              Show
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FilterPanel;
