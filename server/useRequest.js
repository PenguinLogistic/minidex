const dbcall = (url) => fetch(url).then((res) => res.json())

const API_URL = "https://pokeapi.co/api/v2/pokemon"
const page_limit=10

async function useFetchDefault(callback) {
        const uri = `${API_URL}?limit=${page_limit}`
        let result = await dbcall(uri)
        callback(result.results)
}

async function fetchPokemon(name) {
    //console.log(name, callback)
    try{
        const uri = `${API_URL}/${name}` 
        let result = await dbcall(uri)
        if (Object.entries(result).length > 0) {
            return result
        }
    } catch (error){
        return 404;
    }
}

export {useFetchDefault, fetchPokemon}