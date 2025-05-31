import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)
    const {itemId} = useParams()
   
    //usando la promesa que usamos en itemlistcontainer
    // useEffect(()=>{
    //     getProducts()
    //     // .then((respuesta)=> setDetalle(respuesta[1]))
    //     .then((response)=> setDetalle(response.find((item)=> item.id === '03')))
    //     .catch((error)=> console.log(error))
    // },[])

        useEffect(()=>{
          setCargando(true)
        getOneProduct(itemId)
        .then((response)=> setDetalle(response))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[])

  return (
    <div>
       {
       cargando 
       ? <LoaderComponent/>
       :  <ItemDetail detalle={detalle} />
      }
    </div>
  )
}

export default ItemDetailContainer