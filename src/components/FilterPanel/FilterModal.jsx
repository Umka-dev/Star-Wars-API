import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

export default FilterModal;
