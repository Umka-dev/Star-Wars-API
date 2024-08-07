import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Box,
  Stack,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

import { useCharactersContext } from '../../context/CharactersContext';
import GenderRadioButtons from './GenderRadioButtons';
import StatusRadioButtons from './StatusRadioButtons';

import { commonStyles } from '../../constants';

const FilterModal = ({ isOpen, handleClose, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth='sm'
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: commonStyles.backgroundColor,
          color: commonStyles.primaryTextColor,
        },
      }}
    >
      <DialogTitle>
        Filters
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: commonStyles.secondaryTextColor,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

const FilterNameField = ({ onChange, value }) => {
  return (
    <TextField
      label='Input name'
      variant='standard'
      size='small'
      value={value}
      onChange={onChange}
      InputProps={{
        sx: {
          '&:before': {
            borderBottomColor: commonStyles.borderColor,
          },
          '&:after': {
            borderBottomColor: commonStyles.linkColor,
          },
          input: {
            color: commonStyles.primaryTextColor,
          },
        },
      }}
      InputLabelProps={{
        sx: {
          color: commonStyles.primaryTextColor,
        },
      }}
      sx={{ minWidth: '150px' }}
    />
  );
};

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

const FilterPanel = () => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = React.useState(false);

  const handleOpenFilterDialog = () => {
    setIsFilterDialogOpen(true);
  };

  const handleCloseFilterDialog = () => {
    setIsFilterDialogOpen(false);
  };

  return (
    <>
      {/* Display filter button for small screens */}
      <Box display={{ xs: 'block', sm: 'none' }} mt={10} textAlign='center'>
        <Button
          variant='outlined'
          startIcon={<FilterListIcon />}
          onClick={handleOpenFilterDialog}
          sx={{
            color: commonStyles.primaryTextColor,
            borderColor: commonStyles.borderColor,
            ':hover': { color: commonStyles.linkColor },
          }}
        >
          Filters
        </Button>
      </Box>

      {/* Display filter panel for larger screens */}
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        mt={14}
        display={{ xs: 'none', sm: 'flex' }}
      >
        <Box
          position='fixed'
          display='flex'
          width='100%'
          justifyContent='center'
          sx={{
            padding: {
              xs: '220px 16px 16px 16px',
              sm: '100px 16px 16px 16px',
              md: '100px 16px 16px 16px',
              lg: '60px 16px 16px 16px',
              xl: '20px 16px 16px 16px',
            },
            color: commonStyles.primaryTextColor,
            backgroundColor: commonStyles.backgroundColor,
          }}
        >
          <FilterContent />
        </Box>
      </Stack>

      {/* Modal dialog for filters on small screens */}
      <FilterModal
        isOpen={isFilterDialogOpen}
        handleClose={handleCloseFilterDialog}
      >
        <FilterContent />
      </FilterModal>
    </>
  );
};

export default FilterPanel;
