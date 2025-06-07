import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)
    const [invalid, setInvalid]= useState(false)
    const {itemId} = useParams()
   


//FIREBASE

  useEffect(()=>{
    setCargando(true)
    //conectarnos con nuestra coleccion
    const productsCollection= collection(db, "productos")
    //crear una referencia al documento que queremos traer
    const docRef= doc(productsCollection,itemId)
    //VERSION CORTA
    // const docRef= doc(db, "productos", itemId)
    //traer un documento
    getDoc(docRef)
    .then((res)=>{
      if(res.data()){
        setDetalle({...res.data(), id:res.id})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))
  },[])












    //PROMESA
    //usando la promesa que usamos en itemlistcontainer
    // useEffect(()=>{
    //     getProducts()
    //     // .then((respuesta)=> setDetalle(respuesta[1]))
    //     .then((response)=> setDetalle(response.find((item)=> item.id === '03')))
    //     .catch((error)=> console.log(error))
    // },[])

    //     useEffect(()=>{
    //       setCargando(true)
    //     getOneProduct(itemId)
    //     .then((response)=> setDetalle(response))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setCargando(false))
    // },[])


    if(invalid){
      return(
        <div>
          <h2>El producto no existe! 😅</h2>
          <Link className='btn btn-dark'>Volver a Home</Link>
        </div>
      )
    }
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