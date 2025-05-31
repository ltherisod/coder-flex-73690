//importar el hook useContext 
import {useContext, useState}from 'react'
import ItemCount from './ItemCount'
//importar el contexto que se quiere usar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
  //siguiendo la actividad de coder al píe de la letra
  // const [quantity, setQuantity]= useState(0)
  //como lo recomiendo yo
  const [compra, setCompra]= useState(false)
// const contexto = useContext(CartContext)
// console.log(contexto)
const {addItem} = useContext(CartContext)

  const onAdd = (cantidad) => {
    // setQuantity(cantidad)
    setCompra(true)
    console.log(`Compraste ${cantidad} del item ${detalle.name}`)
    //LOGICA DEL CARRITO CON CONTEXT
    addItem(detalle,cantidad)
    // console.log(quantity)
  }
  // console.log(quantity, 'fuera de la funcion')
  return (
    <div>
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
         <p>${detalle.price}</p>
          <p>Stock:{detalle.stock} unidades</p>
          {/* {quantity > 0 ? <Link>Ir al carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>} */}
           {compra 
           ? <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Link to='/' className='btn btn-dark'>Seguir Comprando</Link>
                <Link to='/cart' className='btn btn-dark'>Ir al carrito</Link>
            </div> 
           : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail