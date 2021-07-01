import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../Loading/Loading'
import './PokemonDetails.css'
const uniqid = require('uniqid');

function PokemonDetails({decideTypeColor}) {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})
    const history = useHistory()
    const [psw, setPsw] = useState("")
    const [showPsw, setShowPsw] = useState(false)
    const password = "plsdontdeletety00"

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

    const handleDelete = () => {
        fetch(`https://pokedex-api-minho.herokuapp.com/pokedex/pokemon/${id}/delete`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className = "pokemon-details-page">
          {
            isEmptyObject(pokemon) ? <Loading/> :
            <>
            <h1 id = "mobile-name">{pokemon.name}</h1>
            <img src = {pokemon.img_url === undefined ||
                            pokemon.img_url.trim().length === 0? 
                            "https://i.imgur.com/IvobJfq.png" : 
                            pokemon.img_url
                        } 
                    alt = {pokemon.name}/>
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
                    {  
                        psw === password ? 
                        <button onClick = {handleDelete}>
                            Delete Pokemon
                        </button> : 
                        <button id = "disabled" onClick = {() => setShowPsw(true)}>
                            Delete Pokemon
                        </button>
                    }
                </section>
                {
                    showPsw && <div id = "psw-container">
                    <label for = "psw">Password for Updating & Deleteing Pokemon</label>
                    <input type = "password" id = "psw" value = {psw} onChange = {(e) => setPsw(e.target.value)}></input>
                </div>
                }
            </div>
            </>
          }
        </div>
    )
}

export default PokemonDetails
