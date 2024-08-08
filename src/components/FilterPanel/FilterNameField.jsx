import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FILTER_NAMES } from '../../constants';

const FilterNameField = ({ onChange, value }) => {
  const { palette } = useTheme();

  return (
    <TextField
      label='Input name'
      name={FILTER_NAMES.name}
      variant='standard'
      size='small'
      value={value}
      onChange={onChange}
      InputProps={{
        sx: {
          '&:before': {
            borderBottomColor: palette.common.white,
          },
          '&:after': {
            borderBottomColor: palette.primary.main,
          },
          input: {
            color: palette.common.white,
          },
        },
      }}
      InputLabelProps={{
        sx: {
          color: palette.common.white,
        },
      }}
      sx={{ minWidth: '150px' }}
    />
  );
};

export default FilterNameField;
