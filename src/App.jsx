import React from 'react';
// import './App.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)`
  && {
    font-size: 2rem; /* Default size */
    font-weight: normal;
    margin-top: 56px;

    @media (min-width: 600px) {
      font-size: 2.5rem; /* Size for sm screens */
    }

    @media (min-width: 960px) {
      font-size: 3rem; /* Size for md screens */
    }

    @media (min-width: 1280px) {
      font-size: 3.5rem; /* Size for lg screens */
    }

    @media (min-width: 1920px) {
      font-size: 4rem; /* Size for xl screens */
    }
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyles
        styles={{
          body: {
            margin: '0',
            backgroundColor: '#282c34',
            color: '#fff',
          },
        }}
      />
      <StyledTypography variant='h1' align='center' gutterBottom>
        Star Wars Characters
      </StyledTypography>
    </Container>
  );
};

export default App;
