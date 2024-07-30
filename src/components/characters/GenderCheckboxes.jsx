import * as React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@mui/material';

import { commonStyles } from '../../constants';

const GenderCheckboxes = ({ onChange, genders }) => {
  const genderOptions = ['male', 'female', 'genderless', 'unknown'];
  console.log('Checkboxes genders', genders);

  return (
    <FormControl sx={{ marginTop: '110px', marginLeft: '50px' }}>
      <FormLabel sx={{ color: commonStyles.secondaryTextColor }}>
        Gender
      </FormLabel>
      <FormGroup row>
        {genderOptions.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                value={option}
                checked={genders.includes(option)}
                onChange={(e) => onChange(option, e.target.checked)}
                sx={{ color: commonStyles.secondaryTextColor }}
              />
            }
            label={option.charAt(0).toUpperCase() + option.slice(1)}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};
export default GenderCheckboxes;
