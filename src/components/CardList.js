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
        />
        )
    })
}
        </div>
    );
}

export default CardList;