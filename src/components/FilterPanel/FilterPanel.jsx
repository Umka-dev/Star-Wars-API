import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import { FilterModal, FilterContent } from './';

import { commonStyles } from '../../constants';

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
