import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PokemonCard from '../PokemonCard/PokemonCard'
import '../App.css'
import './typeDetails.css'

import Loading from '../Loading/Loading'

function TypeDetails({decideTypeColor}) {
  const {id} = useParams()
  const [type, setType] = useState({})
  const [pokemonsByType, setPokemonsByType] = useState([])

  useEffect(() => {
    const getType = async () => {
      const typeFromServer = await fetchType(id)
      setType(typeFromServer.type)
      setPokemonsByType(typeFromServer.pokemons)
    }
    getType()
  }, [id])
  const fetchType = async (id) => {
    const response = await fetch(`https://pokedex-api-minho.herokuapp.com/pokedex/type/${id}`)
    const data = await response.json()
    console.log(data)
    return data
  }

    return (
        <>
        <h1>{type.name} type Pokemons:</h1>
        <div className = "type-controllers">
          <button>Update Type</button>
          <button>Delete Type</button>
        </div>
        <article>
          { pokemonsByType.length > 0 ? 
            pokemonsByType.map(pokemon => {
              console.log(pokemon.type.name)
              return (
                <PokemonCard pokemon = {pokemon} decideTypeColor = {decideTypeColor}/>
              )
            })
            : <Loading/>
          }
        </article>
        </>
    )
}

export default TypeDetails
