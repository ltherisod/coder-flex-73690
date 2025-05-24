import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
const ItemListContainer = ({greeting})=>{
    const [data, setData]= useState([])

    useEffect(()=>{
        getProducts()
        .then((respuesta)=> setData(respuesta))
        .catch((error)=> console.error(error))

    },[])
 
    return(
        <div>
            <h1>{greeting}</h1>
           <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer