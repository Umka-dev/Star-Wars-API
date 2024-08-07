import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

import { useCharactersContext } from '../../context/CharactersContext';
import { commonStyles, STATUS_OPTIONS } from '../../constants';

const StatusRadioButtons = () => {
  const { filters, handleFilterChange } = useCharactersContext();

  const handleStatusChange = (e) =>
    handleFilterChange('status', e.target.value);

  return (
    <FormControl>
      <FormLabel sx={{ color: commonStyles.secondaryTextColor }}>
        Status
      </FormLabel>
      <RadioGroup
        row
        name='status'
        value={filters.status}
        onChange={handleStatusChange}
      >
        {STATUS_OPTIONS.map((option) => (
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
export default StatusRadioButtons;
