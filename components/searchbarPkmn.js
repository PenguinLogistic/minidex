import React from 'react'
import { fetchPokemon } from '../server/useRequest'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

export default function SearchbarPkmn({stateFunc, errorFunc, backupData}) {
    // const [specificPkmn, setPkmnData] = useState({});

    // useEffect(()=>{
    //     try{
    //         //fetchPokemon(name, setPkmnData)
    //     } catch (error) {
    //         console.log("error :(")
    //     }
    // },[]);
    async function onSearchPkmn(name) { 
        if(name.trim() === ''){
            stateFunc(backupData)
            errorFunc(0)
        }
        else{
            const result = await fetchPokemon(name.toLowerCase().trim())
            if(result === 404){
                console.log(result)
                errorFunc(result)
            } else {
                stateFunc(result)
                errorFunc(0)
            }
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