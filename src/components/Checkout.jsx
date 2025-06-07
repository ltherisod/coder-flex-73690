import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e)=>{
        //para que no recargue 
        e.preventDefault()

       if(!buyer.name || !buyer.address || !buyer.email){
        alert('Todos los campos sin requeridos!')
       }else if(buyer.email !== validateEmail){
        alert('Los correos no coinciden!')
       }else{
         let orden = {
            comprador:buyer,
            compras:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")

        //agregar un doc

        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
       }
    }

    console.log(buyer)
  return (
   <>
   {
    orderId 
        ?  <div>
            <h2>Generaste correctamente tu orden!</h2>
            <h2>El id es:{orderId}</h2>
            <Link to='/' className='btn btn-dark'>Volver a Home!</Link>
           </div>
        
        : <div>
       <h1>Completa con tus datos</h1> 
       <form onSubmit={finalizarCompra}>
        <input className='form-control' placeholder='Complete con su nombre completo' type="text" name='name' onChange={buyerData}/>
        <input className='form-control' type="text" placeholder='Complete con su direccion de envio' name='address' onChange={buyerData}/>
        <input className='form-control' type="email" placeholder='Complete con su correo' name='email' onChange={buyerData} />
        <input className='form-control' type="email" placeholder='Repita su correo' name='email2' onChange={(e)=> setValidateEmail(e.target.value)}/>
        <button className='btn btn-success' type='submit'>Finalizar Compra</button>
       </form>
    </div>
   }
   </>
  )
}

export default Checkout