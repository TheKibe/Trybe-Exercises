import React, { Component } from "react";

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <div>
                <img src={image} alt="PokemonPhoto" />
                <p>{name}</p>
                <p>{type}</p>
                <p>averageWeight: {averageWeight.value} {averageWeight.measurementUnit}</p>
            </div>
        )
    }
}

export default Pokemon;