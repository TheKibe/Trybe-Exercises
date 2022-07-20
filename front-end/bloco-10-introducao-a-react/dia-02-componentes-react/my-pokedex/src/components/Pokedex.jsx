import React, { Component } from "react";
import Pokemon from './Pokemon';
import pokemons from '../data.js'

class Pokedex extends Component {
    render() {
        const pokemonsList = pokemons.map(index => (
            <Pokemon
                key={index.id}
                pokemonName={index.name}
                pokemonImage={index.image}
                pokemonType={index.type}
                pokemonWeight={index.averageWeight} />
        ));
        return (
            <div>
                <div><h1 className="title">Pokédex</h1></div>
                {pokemonsList}
            </div>
        )
    }
}

export default Pokedex;