import React from 'react';
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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

import { useCharactersContext } from '../../context/CharactersContext';
import { StatusRadioButtons, GenderRadioButtons } from '..';
import { FILTER_NAMES } from '../../constants';

const FilterPanel = () => {
  const { filters, handleNameChange, handleApplyFilters, handleResetFilters } =
    useCharactersContext();

  const [isFilterDialogOpen, setIsFilterDialogOpen] = React.useState(false);
  const { palette, breakpoints } = useTheme();
  const isSmallerThanMd = useMediaQuery(breakpoints.down('md'));

  const handleOpenFilterDialog = () => {
    setIsFilterDialogOpen(true);
  };

  const handleCloseFilterDialog = () => {
    setIsFilterDialogOpen(false);
  };

  const renderFilterContent = () => (
    <Stack
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      spacing={{ xs: 2, sm: 3, md: 6, lg: 8, xl: 10 }}
      alignItems='center'
      px={2}
    >
      <TextField
        label='Input name'
        name={FILTER_NAMES.name}
        variant='standard'
        size='small'
        value={filters.name}
        onChange={handleNameChange}
        InputProps={{
          sx: {
            '&:before': {
              borderBottomColor: palette.common.white,
            },
            '&:after': {
              borderBottomColor: palette.primary.main,
            },
            input: {
              color: palette.common.white,
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: palette.common.white,
          },
        }}
        sx={{ minWidth: '150px' }}
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
          onClick={handleResetFilters}
        >
          Reset
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleApplyFilters}
        >
          Show
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <>
      {/* Display filter button for small screens */}
      {isSmallerThanMd && (
        <Box display='block' mt={11} mb={3} textAlign='center'>
          <Button
            variant='outlined'
            startIcon={<FilterListIcon />}
            onClick={handleOpenFilterDialog}
            sx={{
              color: palette.common.white,
              borderColor: palette.common.white,
              ':hover': { color: palette.primary.main },
            }}
          >
            Filters
          </Button>
        </Box>
      )}

      {/* Display filter panel for larger screens */}
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        mt={14}
        display={{ xs: 'none', sm: 'none', md: 'flex' }}
      >
        <Box
          position='fixed'
          display='flex'
          width='100%'
          justifyContent='center'
          zIndex={1}
          sx={{
            padding: '16px',
            paddingTop: {
              xs: '220px',
              sm: '100px',
              lg: '60px',
              xl: '20px',
            },
            color: palette.common.white,
            backgroundColor: palette.grey[900],
          }}
        >
          {renderFilterContent()}
        </Box>
      </Stack>

      {/* Modal dialog for filters on small screens */}
      {isSmallerThanMd && (
        <Dialog
          open={isFilterDialogOpen}
          onClose={handleCloseFilterDialog}
          maxWidth='md'
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: palette.grey[900],
              color: palette.common.white,
            },
          }}
        >
          <DialogTitle>
            Filters
            <IconButton
              aria-label='close'
              onClick={handleCloseFilterDialog}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: palette.grey[400],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>{renderFilterContent()}</DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default FilterPanel;
