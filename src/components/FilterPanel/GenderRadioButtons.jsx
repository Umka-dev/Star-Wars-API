import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useCharactersContext } from '../../context/CharactersContext';
import { FILTER_NAMES, GENDER_OPTIONS } from '../../constants';
import { capitalFirst } from '../../utils';

const GenderRadioButtons = () => {
  const { filters, handleFilterChange } = useCharactersContext();

  const { palette } = useTheme();

  const handleGenderChange = (e) =>
    handleFilterChange(FILTER_NAMES.gender, e.target.value);

  return (
    <FormControl>
      <FormLabel sx={{ color: palette.grey[400] }}>
        {capitalFirst(FILTER_NAMES.gender)}
      </FormLabel>
      <RadioGroup
        row
        name={FILTER_NAMES.gender}
        value={filters.gender}
        onChange={handleGenderChange}
      >
        {GENDER_OPTIONS.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio sx={{ color: palette.grey[400] }} />}
            label={capitalFirst(option)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default GenderRadioButtons;
