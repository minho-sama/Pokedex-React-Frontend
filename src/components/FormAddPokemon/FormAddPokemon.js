import React from 'react'
import {SiPokemon} from 'react-icons/si'
import {useState} from 'react'

function FormAddPokemon() {
    const [pokemonName, setPokemonName] = useState("")
    const [description, setDescription] = useState("")
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [type, setType] = useState([])
    const [img_url, setImg_url] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit = {handleSubmit} id = "pokemon-add-form">
            <label htmlFor = "name">Pokemon's Name:</label>
            <input required value = {pokemonName}
                onChange = {(e) => {setPokemonName(e.target.value)}}
                type = 'text' id = "name" placeholder = "e.g. Godzilla, King Kong, Doge"  name='name'>
            </input>

            <label htmlFor = "description">Pokemon's Description:</label>
            <input value = {description}
                onChange = {(e) => {setDescription(e.target.value)}}
                type = 'textarea' id = "description" placeholder = "optional"  name='description'>
            </input>

            <label htmlFor = "height">Pokemon's height:</label>
            <input value = {height}
                onChange = {(e) => {setHeight(e.target.value)}}
                type = 'number' id = "height"  name='height'>
            </input>

            <label htmlFor = "weight">Pokemon's weight:</label>
            <input value = {weight}
                onChange = {(e) => {setWeight(e.target.value)}}
                type = 'number' id = "name"  name='weight'>
            </input>
            {/* console logold a chec,box valuekat submitkor!! spread operatorral arrayt csinálni belőle! */}
            {/* <label htmlFor = "name">Pokemon's name:</label>
            <input required value = {pokemonName}
                onChange = {(e) => {setPokemonName(e.target.value)}}
                type = 'text' id = "name" placeholder = "e.g. Godzilla, King Kong, Doge"  name='name'>
            </input> */}
            <label htmlFor = "img_url">Pokemon's image URL:</label>
            <input value = {img_url}
                onChange = {(e) => {setImg_url(e.target.value)}}
                type = 'text' id = "img_url" placeholder = "optional"  name='img_url'>
            </input>

        </form>
    )
}

export default FormAddPokemon
