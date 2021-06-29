import './navbar.css'
import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import {GoThreeBars} from 'react-icons/go'


function Navbar({showTypes, setShowTypes}) {
    return (
        <>
        <nav>
            <img src = "https://i.imgur.com/MHIviTb.png" alt = "pokemon"/>
            <a href = 'https://github.com/minho-sama/Pokedex-Frontend' target = '_blank' rel="noreferrer"><AiFillGithub id = "git-icon" size = "40px"/></a>
            <button id = "menu-button" onClick = {() => setShowTypes(!showTypes)}>
                {showTypes ?  <ImCross size = "23px"/>
                             : <GoThreeBars size = "23px"/>}
            </button>
        </nav>
        </>
    )
}

export default Navbar
