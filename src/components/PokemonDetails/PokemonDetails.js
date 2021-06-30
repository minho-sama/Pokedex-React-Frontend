import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../Loading/Loading'
import './PokemonDetails.css'
const uniqid = require('uniqid');

function PokemonDetails({decideTypeColor}) {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const getPokemon = async () => {
            const pokemon = await fetchPokemon()
            setPokemon(pokemon)
        }
        getPokemon()
    }, [])

    function isEmptyObject(obj){
        return JSON.stringify(obj) === '{}';
    }

    async function fetchPokemon (){
        const response = await fetch(`https://pokedex-api-minho.herokuapp.com/pokedex/pokemon/${id}`)
        const data = await response.json()
        return data
    }

    return (
        <div className = "pokemon-details-page">
          {
            isEmptyObject(pokemon) ? <Loading/> :
            <>
            <h1 id = "mobile-name">{pokemon.name}</h1>
            <img src = {pokemon.img_url} alt = {pokemon.name}/>
            <div className = 'container'>
                <h1 id = "name">{pokemon.name}</h1>
                <figcaption>
                    { pokemon.description === undefined ? `No description avalaible for ${pokemon.name}`:
                      pokemon.description.charAt(0).toUpperCase() + pokemon.description.slice(1)
                    }
                </figcaption>
                <ul className = "data-grid">
                    <li><span>Height: </span> {pokemon.height === undefined ? 'N.A.' : pokemon.height} <span> cm</span></li>
                    <li><span>Weight: </span> {pokemon.weight === undefined ? 'N.A.' : pokemon.weight} <span> kg</span></li>
                </ul>
                <ul className = "type-grid">
                {pokemon.type.map(type => {
                    return (
                        <li key = {uniqid()}
                        className = {decideTypeColor(type.name)}>
                        {type.name}
                        </li>
                    )
                })}
                </ul>
                <section className = 'control-btns'>
                    <button>
                        Update Info
                    </button>
                    <button>
                        Delete Pokemon
                    </button>
                </section>
            </div>
            </>
          }
        </div>
    )
}

export default PokemonDetails
