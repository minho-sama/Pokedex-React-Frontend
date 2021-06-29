import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import PokemonCard from './Pokemonard/PokemonCard'

function App() {
  const [types, setTypes] = useState([])
  const [showTypes, setShowTypes] = useState(true)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
      const getTypes = async () => {
          const types = await fetchTypes()
          setTypes(types)
      }
      getTypes()

      const getPokemons = async () => {
        const pokemons = await fetchPokemons()
        setPokemons(pokemons)
      }
      getPokemons()
  }, [])

  const fetchTypes = async ()=>{
      const res = await fetch('https://pokedex-api-minho.herokuapp.com/pokedex/types')
      const data = await res.json()
      return data
  } 

  const fetchPokemons = async () => {
    const res = await fetch('https://pokedex-api-minho.herokuapp.com/pokedex/pokemons')
    const data = await res.json()
    return data
  }

  //typecontrollers
  const fetchPokemonsByType = async (id) => {
    const res = await fetch(`https://pokedex-api-minho.herokuapp.com/pokedex/type/${id}`)
    const data = await res.json()
    return data
  }


  //as we can update the type name, it is smarter to use the id, or type data could include the color in rgb
  function decideTypeColor (name){
    switch (name){
      case 'fire':
        return 'fire-type'
      case 'water':
        return 'water-type'
      case 'grass':
        return 'grass-type'
      case 'poison':
        return "poison-type"
      case 'flying':
        return 'flying-type'
      case 'electric':
        return 'electric-type'
      case 'bug':
        return 'bug-type'
      case 'normal':
        return 'normal-type'
      case 'ground':
        return 'ground-type'
      case 'fairy':
        return 'fairy-type'
      case 'fighting':
        return 'fighting-type'
      case 'dragon':
        return 'dragon-type'
      case 'ghost':
        return 'ghost-type'
      case 'rock':
        return 'rock-type'
      case 'ice':
        return 'ice-type'
      case 'psychic':
        return 'psychic-type'
      default:
        return 'default-color'
    }
  }

  return (
    <>
      <Navbar showTypes = {showTypes} setShowTypes = {setShowTypes}/>
      <ul id = "type-container">
          {
            showTypes && types.map(type => {
                return <li 
                        onClick ={() => alert(type._id)}
                        className = {decideTypeColor(type.name)}
                        key = {type._id}>
                        {type.name}
                        </li>
            })
          }
        </ul>
        <article>
          {
            pokemons.length > 0 ? 
            pokemons.map(pokemon => {
              return <PokemonCard key = {pokemon._id} pokemon = {pokemon} />
            }) :
            <img id = "loading-img" src = "https://i.imgur.com/IvobJfq.png" alt = "pokeball"/>
          }
        </article>
    </>
  );
}

export default App;
