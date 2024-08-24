// PokemonCard.js
import React from 'react';
import { Card, PokemonName, PokemonType, EvolveButton } from './styles';

const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        props.onEvolve();
    };

    return (
        <Card color={props.color}>
            <img src={props.image} alt={`${props.name}`} />
            <PokemonName>{props.name}</PokemonName>
            <PokemonType>{props.type}</PokemonType>
            <p>{props.weight}kg</p>

            <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
        </Card>
    );
};

export default PokemonCard;
