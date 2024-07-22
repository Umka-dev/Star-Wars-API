import React from 'react';
import { Typography, Box } from '@mui/material';

import { commonStyles } from '../constants';

const Footer = () => {
  return (
    <Box
      component='footer'
      textAlign='center'
      py={3}
      px={2}
      color={commonStyles.secondaryTextColor}
    >
      <Typography variant='body2'>
        © {new Date().getFullYear()} Rick and Morty Characters | made by
        Umka-dev with💙
      </Typography>
    </Box>
  );
};

export default Footer;
