import React from "react";

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props;
        console.log(pokemon);
        return (
            <div class="pokeCard">
                <section class="info">
                    <p>{pokemon.name}</p>
                    <p>{pokemon.type}</p>
                    <p>Average wheight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
                </section>
                <a href={pokemon.moreInfo} target="_blank"><img src={pokemon.image}/></a>
            </div>
        );
    }
}

export default Pokemon;