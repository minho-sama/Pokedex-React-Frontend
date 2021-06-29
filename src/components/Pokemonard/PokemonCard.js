import React from 'react'
import './PokemonCard.css'
function PokemonCard({pokemon}) {
    return (
        <section>
            {pokemon.name}
        </section>
    )
}

export default PokemonCard
