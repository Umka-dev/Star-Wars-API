import React, { useState, useEffect } from 'react';
// import { characters } from '../data/characters_data';
import Cards from './Cards';

const API_URL = 'https://rickandmortyapi.com/api/character';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(
            'Network response was not ok! Status: ${response.status}',
          );
        }
        const apiCharacters = await response.json();
        console.log(apiCharacters);
        setCharacters(apiCharacters.results);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error: ', error);
        setError(error);
        setLoading(false);
        throw error;
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Cards characterList={characters} />
      <button>Load more</button>
    </div>
  );
};

export default CardContainer;
