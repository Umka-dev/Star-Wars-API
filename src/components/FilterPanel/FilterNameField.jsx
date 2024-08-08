import React from 'react';
import { TextField } from '@mui/material';

import { commonStyles } from '../../constants';

const FilterNameField = ({ onChange, value }) => {
  return (
    <TextField
      label='Input name'
      variant='standard'
      size='small'
      value={value}
      onChange={onChange}
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
  );
};

export default FilterNameField;
