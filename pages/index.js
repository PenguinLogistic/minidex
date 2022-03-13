import styles from '../styles/Home.module.scss'
import Pokemon from '../components/pokemon'
import {useFetchDefault} from '../server/useRequest'
import { useState, useEffect } from 'react'

export default function Home() {
  // const {result, error} = useFetchPkmn()

  // if (error) return <h1>Something went wrong!</h1>
  // if (!result) return <h1>Loading...</h1>
  const [pokedexData, setData] = useState([])
  
  useEffect(()=>{
    useFetchDefault(setData)
  },[]);
  
  return (
    <div className={styles.pkmn__main}>
      <h1 className={styles.title}>MiniDex</h1>
      {pokedexData.map((pkmn) => (
        <Pokemon pokemon={pkmn} key={pkmn.name} />
        //<h1 className='Card--name'>{pkmn.name}</h1>
      ))}
    </div>
  )
}
