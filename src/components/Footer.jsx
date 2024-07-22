import React from 'react';
import { Typography, Box } from '@mui/material';

import { commonStyles } from '../constants';

const Footer = () => {
  return (
    <Box
      component='footer'
      align='center'
      py={3}
      px={2}
      color={commonStyles.secondTextColor}
    >
      <Typography variant='body2'>
        © {new Date().getFullYear()} Rick and Morty Characters | made by
        Umka-dev with💙
      </Typography>
    </Box>
  );
};

export default Footer;
