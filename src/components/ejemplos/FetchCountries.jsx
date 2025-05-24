import React,{useEffect} from 'react'

const FetchCountries = () => {

    useEffect(()=>{
        //pedir datos
        fetch('https://restcountries.com/v3.1/name/argentina')
        //traduzco
        .then((response)=>response.json())
        .then((data)=> console.log(data[0].flag))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div>FetchCountries</div>
  )
}

export default FetchCountries