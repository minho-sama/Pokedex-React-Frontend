import React from 'react'
import './PokemonCard.css'
import {Link} from 'react-router-dom'
const uniqid = require('uniqid');

function PokemonCard({pokemon, decideTypeColor}) {
    return (
        <section>
            <Link to = {`/pokemon/${pokemon._id}`} style={{ textDecoration: 'none' }}>
                <img src = {pokemon.img_url === undefined ||
                            pokemon.img_url.trim().length === 0? 
                            "https://i.imgur.com/IvobJfq.png" : 
                            pokemon.img_url
                        } 
                    alt = {pokemon.name}/>
                <h1>{pokemon.name}</h1>
            </Link>
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
