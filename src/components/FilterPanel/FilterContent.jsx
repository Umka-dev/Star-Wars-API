import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import { GenderRadioButtons, StatusRadioButtons, FilterNameField } from './';

import { useCharactersContext } from '../../context/CharactersContext';
import { commonStyles } from '../../constants';

const defaultFormValues = {
  name: '',
};

const FilterContent = () => {
  const { handleResetFilters, handleApplyFilters } = useCharactersContext();

  const { handleSubmit, reset, control } = useForm({ defaultFormValues });

  const onSubmit = (data) => {
    console.log(data);
    handleApplyFilters(data);
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 2, sm: 2, md: 6, lg: 8, xl: 10 }}
      alignItems='center'
      px={2}
    >
      <Controller
        name='name'
        control={control}
        render={({ field: { onChange, value } }) => (
          <FilterNameField onChange={onChange} value={value} />
        )}
      />
      <StatusRadioButtons />
      <GenderRadioButtons />
      <Stack direction='row' spacing={2}>
        <Button
          variant='outlined'
          sx={{
            color: commonStyles.primaryTextColor,
            borderColor: commonStyles.borderColor,
            ':hover': { color: commonStyles.linkColor },
          }}
          onClick={() => {
            handleResetFilters();
            reset();
          }}
        >
          Reset
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit(onSubmit)}
        >
          Show
        </Button>
      </Stack>
    </Stack>
  );
};

export default FilterContent;
