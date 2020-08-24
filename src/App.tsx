import React, { useState } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import Pokemon from './components/Pokemon';

type pokemonInfo = {
  name: string;
  image: string;
  moves: Array<{
    move: {
      name: string
    }
  }>
  types: Array<{
    type: {
      name: string
    }
  }>
}

export const App: React.FC = () => {
  const [fetchedPokemon, updateFetchedPokemon] = useState<pokemonInfo|null>(null);
  const [error, updateError] = useState<string>('');

  const searchPokemon = (searchValue: string): void => {
    let url = 'https://pokeapi.co/api/v2/pokemon/'+searchValue;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let pokemonInfo = {
          name: data.name,
          image: data.sprites.front_default,
          moves: data.moves,
          types: data.types
        }
        console.log(pokemonInfo);
        updateFetchedPokemon(pokemonInfo);
        updateError('');
      })
      .catch(error => {
        console.log(error)
        updateFetchedPokemon(null);
        updateError('No Pokemon Found');
      })
  }

  return (
    <div className="App">
      <header className="header">
        <h2 className="header-title">Welcome to the pokemon info app, here you can find all the info you need!</h2>
      </header>
      <div className="content-container">
        <SearchBar
          handleSearch={searchPokemon}
        />
        {error && <p>Error: {error}</p>}
        {fetchedPokemon ?
          <Pokemon
            pokemonInfo={fetchedPokemon}
          />
          :
          <p>No pokemon searched yet.</p>
        }
      </div>
    </div>
  );
}