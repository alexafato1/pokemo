import React from 'react'

export default function PokemonList(props) {

    return (
        <div>
         {props.pokemon.map(p => (
             <p key={p}>{p}</p>
         ))}   
        </div>
    )
}

