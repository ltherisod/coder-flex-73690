import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    //usando la promesa que usamos en itemlistcontainer
    // useEffect(()=>{
    //     getProducts()
    //     // .then((respuesta)=> setDetalle(respuesta[1]))
    //     .then((response)=> setDetalle(response.find((item)=> item.id === '03')))
    //     .catch((error)=> console.log(error))
    // },[])

        useEffect(()=>{
        getOneProduct('02')
        .then((response)=> setDetalle(response))
        .catch((error)=> console.log(error))
    },[])

    console.log(detalle)
  return (
    <div>
        <ItemDetail detalle={detalle} />
    </div>
  )
}

export default ItemDetailContainer