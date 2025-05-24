import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "./ejemplos/Input"

const ItemListContainer = ({greeting})=>{
    const [data, setData]= useState([])
    const {categoryId}= useParams()
    console.log(categoryId)

    useEffect(()=>{
        getProducts()
        .then((respuesta)=>{
            if(categoryId){
                //filtrar
                setData(respuesta.filter((prod)=> prod.category === categoryId))
            }else{
                //no filtro
                setData(respuesta)
            }
        })
        .catch((error)=> console.error(error))
    },[categoryId])
 
    return(
        <div>
            {/* <Input/> */}
            <h1>{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
           <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer