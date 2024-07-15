import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const API_URL = 'https://rickandmortyapi.com/api/character/';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${API_URL}?page=${page}`);
        if (!response.ok) {
          throw new Error(
            'Network response was not ok! Status: ${response.status}',
          );
        }
        const apiCharacters = await response.json();
        console.log(apiCharacters);
        // setCharacters(apiCharacters.results);
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...apiCharacters.results,
        ]);

        setCount(apiCharacters.info.count);
        console.log(apiCharacters.info.count);

        setNext(apiCharacters.info.next);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error: ', error);
        setError(error);
        setLoading(false);
        throw error;
      }
    };

    fetchCharacters(page);
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pageCounter = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <p>Total count of cartoon characters: {count}</p>
      <Cards characterList={characters} page={page} next={next} />
      <p>Page - {page}</p>
      {next && <button onClick={pageCounter}>Load more</button>}
    </div>
  );
};

export default CardContainer;
