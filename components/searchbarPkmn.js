import React from 'react'
import { fetchPokemon } from '../server/useRequest'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

export default function SearchbarPkmn({stateFunc}) {
    // const [specificPkmn, setPkmnData] = useState({});

    // useEffect(()=>{
    //     try{
    //         //fetchPokemon(name, setPkmnData)
    //     } catch (error) {
    //         console.log("error :(")
    //     }
    // },[]);
    function onSearchPkmn(name) { 
        try{
            fetchPokemon(name.toLowerCase(), stateFunc)
        } catch (error) {
            console.log("error :(")
        }
    }
    
    function onKeyDownHandler (event,name) {
        if (event.key === "Enter") {
            onSearchPkmn(name)
        }
    }

    return (
        <div className={styles.search__pkmn__wrapper} >
            <input type='text' placeholder='Search Pokemon by name' 
            //onChange={event => onSearchPkmn(event.target.value)}/>
            onKeyDown={event => onKeyDownHandler(event,event.target.value)}/>
        </div>
    )
}