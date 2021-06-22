import Pokemon from "./pokemon";
import React from "react";
import pokemons from "../data";

class PokemonList extends React.Component {
    render() {
        return (
            <ul>
                {pokemons.map(pokemon => <Pokemon pokemon={pokemon}/>)}
            </ul>
        )
    }
}

export default PokemonList;