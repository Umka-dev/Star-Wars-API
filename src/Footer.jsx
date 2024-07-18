import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component='footer' py={3} px={2} mt='auto' color='#ccc'>
      <Typography variant='body2' align='center'>
        © {new Date().getFullYear()} Rick and Morty Characters | made by
        Umka-dev with💙
      </Typography>
    </Box>
  );
};

export default Footer;
