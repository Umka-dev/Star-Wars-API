import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { commonStyles } from '../../constants';

const GenderRadioButtons = ({ onChange, gender }) => {
  console.log('Got gender: ', gender);
  return (
    <FormControl sx={{ marginTop: '100px' }}>
      <FormLabel sx={{ color: commonStyles.secondaryTextColor }}>
        Gender
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby='row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        value={gender}
        onChange={onChange}
      >
        <FormControlLabel
          value='female'
          control={<Radio sx={{ color: commonStyles.secondaryTextColor }} />}
          label='Female'
        />
        <FormControlLabel
          value='male'
          control={<Radio sx={{ color: commonStyles.secondaryTextColor }} />}
          label='Male'
        />
        <FormControlLabel
          value='genderless'
          control={<Radio sx={{ color: commonStyles.secondaryTextColor }} />}
          label='Genderless'
        />
        <FormControlLabel
          value='unknown'
          control={<Radio sx={{ color: commonStyles.secondaryTextColor }} />}
          label='Unknown'
        />
      </RadioGroup>
    </FormControl>
  );
};
export default GenderRadioButtons;
