import React from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { palette } = useTheme();
  return (
    <Container
      maxWidth='xl'
      sx={{
        color: palette.common.white,
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
