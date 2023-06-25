import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./pokemon";
import pokedexLogo from "./pokedex_logo.svg"
import './App.css';

function App() {
  return (
    <div>
      <img className="logo" src={ pokedexLogo } />
      <div className="Pokedex-container">
        <Pokedex pokemons={ pokemons } />
      </div>
    </div>
  );
}

export default App;
