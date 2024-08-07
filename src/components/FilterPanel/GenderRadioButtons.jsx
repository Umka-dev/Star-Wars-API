import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

import { useCharactersContext } from '../../context/CharactersContext';
import { commonStyles, GENDER_OPTIONS } from '../../constants';

const GenderRadioButtons = () => {
  const { filters, handleFilterChange } = useCharactersContext();

  const handleGenderChange = (e) =>
    handleFilterChange('gender', e.target.value);

  return (
    <FormControl>
      <FormLabel sx={{ color: commonStyles.secondaryTextColor }}>
        Gender
      </FormLabel>
      <RadioGroup
        row
        name='gender'
        value={filters.gender}
        onChange={handleGenderChange}
      >
        {GENDER_OPTIONS.map((option) => (
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
