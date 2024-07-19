import React from 'react';
import useSWRInfinite from 'swr/infinite';
import { Button, Container, Typography, CircularProgress } from '@mui/material';
import Cards from './Cards';
import { commonStyles, CHARACTER_API_URL } from '../../constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const CardContainer = () => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.info.next) return null;
    return previousPageData ? previousPageData.info.next : CHARACTER_API_URL;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
  );

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  if (error)
    return (
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          marginTop: '20px',
        }}
      >
        <Typography variant='h5'>Error: {error.message}</Typography>
      </Container>
    );

  if (!data) {
    return (
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          marginTop: '20px',
        }}
      >
        <CircularProgress size={50} />
      </Container>
    );
  }

  const characters = data.flatMap((page) => page.results);
  const totalCount = data[0]?.info.count;
  const hasNextPage = data[data.length - 1]?.info.next;

  return (
    <Container maxWidth='xl' align='center'>
      <Typography
        variant='h1'
        align='center'
        sx={{
          fontSize: {
            xs: '2rem', // small screens
            sm: '2.5rem', // medium screens
            md: '3rem', // large screens
            lg: '3.5rem', // extra large screens
            xl: '4rem', // double extra large screens
          },
          margin: {
            xs: '80px 0 20px 0',
            sm: '80px 0 30px 0',
            md: '80px 0 40px 0',
            lg: '80px 0 60px 0',
            xl: '80px 0 80px 0',
          },
        }}
      >
        The Rick and Morty Characters
      </Typography>

      <Cards characterList={characters} />
      <Typography variant='subtitle2' margin={5}>
        Characters shown {characters.length} from {totalCount}
      </Typography>

      {hasNextPage && (
        <Button
          variant='outlined'
          sx={{
            color: commonStyles.textColor,
            borderColor: 'white',
            marginBottom: '100px',
            ':hover': { color: '#1976d2' },
          }}
          onClick={handleLoadMore}
          disabled={isValidating} // Disable button while loading
        >
          {isValidating ? (
            <CircularProgress size={50} determinate value={20} thickness={4} />
          ) : (
            'Load more'
          )}
        </Button>
      )}
    </Container>
  );
};

export default CardContainer;
