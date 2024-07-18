import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { commonStyles } from '../constants';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: commonStyles.backgroundColor,
        color: commonStyles.textColor,
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
