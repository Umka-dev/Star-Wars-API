import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardContainer } from '../components/characters';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [queryParamsWithoutPage, setQueryParamsWithoutPage] =
    React.useState('');

  React.useEffect(() => {
    searchParams.delete('page');
    setQueryParamsWithoutPage(searchParams.toString());
  }, [searchParams]);

  return <CardContainer queryParams={queryParamsWithoutPage} />;
};

export default SearchResults;
