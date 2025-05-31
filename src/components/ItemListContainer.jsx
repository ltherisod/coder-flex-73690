import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"


const ItemListContainer = ({greeting})=>{
    const [data, setData]= useState([])
    const {categoryId}= useParams()
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        setLoading(true)
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
         .finally(()=> setLoading(false))
    },[categoryId])
 
    return(
        <>
        {
            loading 
            ? <LoaderComponent/> 
            :   <div>
                    <h1>{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
                    <ItemList data={data}/>
                </div>
        }
        </>
    )
}
export default ItemListContainer