import React from 'react'
import { fetchPokemon } from '../server/useRequest'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

export default function Pokemon({pokemon}) {
    const [specificPkmn, setPkmnData] = useState({});

    const {name} = pokemon

    useEffect(()=>{
        (async () => {
            try{
                const result = await fetchPokemon(name)
                setPkmnData(result)
            } catch (error) {
                console.log("error :(")
            }
        })()
    },[]);

    //console.log({name:specificPkmn.name})
    return (
        <div className={styles.pkmn__card} >
            {Object.entries(specificPkmn).length > 0 ? 
            <div>
                <img
                    src={specificPkmn.sprites.front_default}
                    alt={name}
                />
                <h1>{name}</h1>
                <span>
                    {specificPkmn.types.map((poke) => poke.type.name).join(', ')}
                </span> 
            </div>
            : <p>Loading Pokedex</p>}
        </div>
    )
}