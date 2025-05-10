import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
const ItemListContainer = ({greeting})=>{
    // const {greeting}= props
    const [data, setData]= useState([])
    console.log('Soy ItemListContainer')

    useEffect(()=>{
        // console.log(getProducts(), 'promesa')
        //ejecutar mi funcion de promesa
        getProducts()
        .then((respuesta)=> setData(respuesta))
        .catch((error)=> console.error(error))

    },[])
    //ejemplo de promise
    // const error = false
    // const ejemploPromise = new Promise ((resolve, reject) =>{
    //     if(error){
    //         reject('No hay ñoquis')
    //     }else{
    //         resolve('Si hay ñoquis 😊')
    //     }
    // }) 

    // console.log(ejemploPromise, 'promesa')
     console.log(data)
    return(
        <div>
            <h1>{greeting}</h1>
           {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
           <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer