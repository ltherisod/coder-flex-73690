//importar el hook useContext 
import {useContext}from 'react'
import ItemCount from './ItemCount'
//importar el contexto que se quiere usar
import { CartContext } from '../context/CartContext'

const ItemDetail = ({detalle}) => {
// const contexto = useContext(CartContext)
// console.log(contexto)
const {cart} = useContext(CartContext)
console.log(cart)
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} del item ${detalle.name}`)
  }
  return (
    <div>
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
         <p>${detalle.price}</p>
          <p>Stock:{detalle.stock} unidades</p>
          <ItemCount stock={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail