import React, { useState, useEffect, useCallback } from 'react';
import Cards from './Cards';

const API_URL = 'https://rickandmortyapi.com/api/character/?page=1';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [next, setNext] = useState(API_URL);

  const fetchCharacters = useCallback(async () => {
    if (!next) {
      return;
    }
    try {
      const response = await fetch(next);
      if (!response.ok) {
        throw new Error(
          `Network response was not ok! Status: ${response.status}`,
        );
      }
      const {
        info: { next: newNext },
        results,
      } = await response.json();
      setCharacters((prevCharacters) => [...prevCharacters, ...results]);
      setNext(newNext);
      setLoading(false);
    } catch (error) {
      console.error('Fetch error: ', error);
      setError(error);
      setLoading(false);
      throw error;
    }
  }, [next]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log('characters ' + characters.length);
  console.log('loading ' + loading);
  console.log('error ' + error);
  console.log('new next ' + next);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Cards characterList={characters} countCharacters={characters.length} />
      {next && <button onClick={fetchCharacters}>Load more</button>}
    </div>
  );
};

export default CardContainer;
