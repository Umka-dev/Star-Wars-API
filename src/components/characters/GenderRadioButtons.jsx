import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

import { commonStyles } from '../../constants';

const GenderRadioButtons = ({ onChange, gender }) => {
  const genderOptions = ['male', 'female', 'genderless', 'unknown'];

  return (
    <FormControl>
      <FormLabel sx={{ color: commonStyles.secondaryTextColor }}>
        Gender
      </FormLabel>
      <RadioGroup row name='gender' value={gender} onChange={onChange}>
        {genderOptions.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio sx={{ color: commonStyles.secondaryTextColor }} />}
            label={option.charAt(0).toUpperCase() + option.slice(1)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default GenderRadioButtons;
