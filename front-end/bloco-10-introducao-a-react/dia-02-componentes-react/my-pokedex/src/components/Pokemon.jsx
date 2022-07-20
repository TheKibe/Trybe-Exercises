import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { pokemonImage } = this.props;
        const { pokemonName } = this.props;
        const { pokemonType } = this.props;
        const { pokemonWeight } = this.props;
        return (
            <ul className="pokemon">
                <img src={pokemonImage} alt="PokemonPhoto" />
                <p>{pokemonName}</p>
                <p>{pokemonType}</p>
                <p>averageWeight: {pokemonWeight.value} {pokemonWeight.measurementUnit}</p>
            </ul>
        )
    }
}

Pokemon.propTypes = {
    pokemonImage: PropTypes.string,
    pokemonName: PropTypes.string,
    pokemonType: PropTypes.string,
    pokemonWeight: PropTypes.object,
}

Pokemon.defaultProps = {
    pokemonImage: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    pokemonName: 'Pikachu',
    pokemonType: 'Electric',
    pokemonWeight: {
        value: 6.0,
        measurementUnit: "kg"
    },
}

export default Pokemon;

