import React from 'react';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

import { commonStyles } from '../constants';

const Layout = ({ children }) => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      maxWidth='xl'
      sx={{
        backgroundColor: commonStyles.backgroundColor,
        color: commonStyles.textColor,
      }}
    >
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
