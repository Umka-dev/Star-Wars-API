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
import { capitalFirst } from '../../utils';

const StatusRadioButtons = () => {
  const { filters, handleFilterChange } = useCharactersContext();

  const { palette } = useTheme();

  const handleStatusChange = (e) =>
    handleFilterChange(FILTER_NAMES.status, e.target.value);

  return (
    <FormControl>
      <FormLabel sx={{ color: palette.grey[400] }}>
        {capitalFirst(FILTER_NAMES.status)}
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
            label={capitalFirst(option)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default StatusRadioButtons;
