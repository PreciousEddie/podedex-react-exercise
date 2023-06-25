import React from "react";
import Pokecard from "./Pokecard";
import pokedexLogo from "./pokedex_logo.svg"

const Pokedex = ({ pokemons }) => {
    return (
        <>
            { pokemons.map(p => (
                <Pokecard name={ p.name } img={ p.img } type={ p.type } base_experience={ p.base_experience } />
            )) }
        </>
    )
}

export default Pokedex;