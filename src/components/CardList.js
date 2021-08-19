import React from "react";
import Card from "./Card";


const CardList = ({ pokemons }) => {   
    return (
        <div>
    {
        pokemons.map(pokemon => {
        return (
        <Card 
        key={pokemon.id} 
        id={pokemon.id} 
        name={pokemon.name} 
        height={pokemon.height}
        weight={pokemon.weight}
        exp={pokemon.base_experience}
        type={pokemon.types[0].type.name}
        />
        )
    })
}
        </div>
    );
}

export default CardList;