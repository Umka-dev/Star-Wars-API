import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GenderRadioButtons, StatusRadioButtons, FilterNameField } from './';

import { useCharactersContext } from '../../context/CharactersContext';

const defaultFormValues = {
  name: '',
};

const FilterContent = () => {
  const { handleResetFilters, handleApplyFilters } = useCharactersContext();

  const { palette } = useTheme();

  const { handleSubmit, reset, control } = useForm({ defaultFormValues });

  const onSubmit = (data) => {
    console.log(data);
    handleApplyFilters(data);
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      spacing={{ xs: 2, sm: 3, md: 6, lg: 8, xl: 10 }}
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
            color: palette.common.white,
            borderColor: palette.common.white,
            ':hover': { color: palette.primary.main },
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
