import * as React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

import { commonStyles } from '../../constants';

const StatusRadioButtons = ({ onChange, status }) => {
  const statusOptions = ['alive', 'dead', 'unknown'];

  return (
    <FormControl>
      <FormLabel sx={{ color: commonStyles.secondaryTextColor }}>
        Status
      </FormLabel>
      <RadioGroup row name='status' value={status} onChange={onChange}>
        {statusOptions.map((option) => (
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
