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
import { FILTER_NAMES, STATUS_OPTIONS } from '../../constants';

const StatusRadioButtons = () => {
  const { filters, handleFilterChange } = useCharactersContext();

  const { palette } = useTheme();

  const handleStatusChange = (e) =>
    handleFilterChange(FILTER_NAMES.status, e.target.value);

  return (
    <FormControl>
      <FormLabel sx={{ color: palette.grey[400] }}>
        {FILTER_NAMES.status.charAt(0).toUpperCase() +
          FILTER_NAMES.status.slice(1)}
      </FormLabel>
      <RadioGroup
        row
        name={FILTER_NAMES.status}
        value={filters.status}
        onChange={handleStatusChange}
      >
        {STATUS_OPTIONS.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio sx={{ color: palette.grey[400] }} />}
            label={option.charAt(0).toUpperCase() + option.slice(1)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default StatusRadioButtons;
