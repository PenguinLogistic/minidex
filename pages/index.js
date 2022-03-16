import styles from '../styles/Home.module.scss'
import Pokemon from '../components/pokemon'
import SearchbarPkmn from '../components/searchbarPkmn'
import {useFetchDefault} from '../server/useRequest'
import { useState, useEffect } from 'react'

export default function Home() {
  // const {result, error} = useFetchPkmn()

  // if (error) return <h1>Something went wrong!</h1>
  // if (!result) return <h1>Loading...</h1>
  const [pokedexData, setData] = useState([])
  const [searchResult, setSearch] = useState({})
  const [error, setError] = useState(0)
  const [backup, setBackup] = useState({})
  
  useEffect(()=>{
    useFetchDefault(setData)
    setBackup(pokedexData)
  },[]);
  
  //console.log(searchResult);

  return (
    <div className={styles.pkmn__main}>
      <h1 className={styles.title}>MiniDex</h1>
      <SearchbarPkmn stateFunc={setSearch} errorFunc={setError} backupData={backup}/>
      {error === 0 ? 
        (Object.entries(searchResult).length > 0 ? 
          <Pokemon pokemon={searchResult} key={searchResult.name} />
          :pokedexData.map((pkmn) => (
            <Pokemon pokemon={pkmn} key={pkmn.name} />
          )))
        :(<p>ERROR!</p>)
      }
    </div>
  )
}
