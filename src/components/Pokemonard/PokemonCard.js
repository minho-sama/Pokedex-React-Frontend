import React from 'react'
import './PokemonCard.css'
const uniqid = require('uniqid');

function PokemonCard({pokemon, decideTypeColor}) {
    return (
        <section>
            <img src = {pokemon.img_url} alt = {pokemon.name}/>
            <h1>{pokemon.name}</h1>
            <ul>
            {
                pokemon.type.map(type => {
                    return (
                        <li key = {uniqid()}
                        className = {decideTypeColor(type.name)}>
                        {type.name}
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}

export default PokemonCard
