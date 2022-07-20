import React, { Component } from "react";
import Pokemon from './Pokemon';
import pokemons from '../data.js'

class Pokedex extends Component {
    render() {
        const pokemonsList = pokemons.map(index => <ul key={index.id} className="pokemon"><Pokemon pokemon={index} /></ul>)
        return (
            <div>
                <h1 className="title">Pokédex</h1>
                {pokemonsList}
            </div>
        )
    }
}

export default Pokedex;