import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const FetchApi = () => {
    // const [fetchData, setFetchData]= useState([])
    const{data, loading, error}=useFetch('https://rickandmortyapi.com/api/character')
    // useEffect(()=>{
    //     //pido los datos
    //     // fetch('https://rickandmortyapi.com/api/character')
    //     // fetch(' https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    //     fetch('https://dragonball-api.com/api/characters')
    //     .then((response)=> response.json())
    //     .then((data)=> setFetchData(data.items))
    //     .catch((error)=> console.log(error))
    // },[])
    console.log(data, loading, error)
  return (
    <div>
        {/* {fetchData.map((item)=> <p key={item.id}>{item.name}</p>)} */}
       { loading 
        ? <p>Cargando</p>
        : data?.results?.map((personaje)=> <p key={personaje.id}>{personaje.name}</p>)}
    </div>
  )
}

export default FetchApi