import { useEffect, useState } from "react"

const usePokemon = ( pokemonUrl ) => {

    const [pokemon, setPokemon ] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchPokemons = async () => {
            try{
                setLoading(true)
                const response = await fetch(pokemonUrl) 
                if(response.status != 200){
                    throw new Error("Error en la peticion")
                }
                const data = await response.json()
                setPokemon(data)
                
            }catch(error){
                setError(error as any)
            }finally{
                setLoading(false)
            }
            
        }
        fetchPokemons()
    },[pokemonUrl])
    return { pokemon, loading, error };
}
export default usePokemon
    
