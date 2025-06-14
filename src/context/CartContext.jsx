import { createContext, useEffect, useState } from "react";

//Creamos el contexto
export const CartContext = createContext()

//local storage
const prodLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
//Crear nuestro proveedor

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState(prodLocalStorage)
   //Todas las funciones que modifiquen ese estado

    //carrito persistente
    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])


   //Agregar un item al carrito no repetir y sumar cantidades
   const addItem = (item, cantidad)=>{
    // console.log(item, cantidad, 'desde el contexto')
    // console.log({...item, quantity:cantidad}, 'desde el contexto')
    if(isInCart(item.id)){
        //existe ese item ya en el carrito, tengo que sumar cantidades
        //logica de sumar cantidades
        const updatedCart = cart.map((prod)=>{
            if(prod.id === item.id){
                //sumar cantidades
                return {...prod, quantity: prod.quantity + cantidad}
            }else{
                //retorn el obj sin modificar
                return prod
            }
        })
        //ACTUALIZAR EL CARRITO CON SU NUEVO ARRAY
        setCart(updatedCart)
        //FORMA CORTA
        // setCart(
        //     cart.map((prod)=>{
        //     if(prod.id === item.id){
        //         //sumar cantidades
        //         return {...prod, quantity: prod.quantity + cantidad}
        //     }else{
        //         //retorn el obj sin modificar
        //         return prod
        //     }
        // })
        // )
    }else{
        //se agrega el producto nuevo

        setCart([...cart, {...item, quantity:cantidad}])
    }
   }

   //borrar el carrito
   const clear = () =>{
    setCart([])
   }

   //eliminar un item del carrito
   const removeItem = (id) => {
    setCart(cart.filter((prod)=> prod.id !== id))
   }

   //tiene que devolver un booleano si esta o no en el carrito
   const isInCart = (id)=>{
    return cart.some((prod)=> prod.id === id)
   }

   //cantidad de items en el carrito que la van a usar en CartWidget
   const cartQuantity = ()=> {
    return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
   }

   //total a pagar
   const cartTotal = () => {
    return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
   }
//opcional
//    const totalConImpuestos = () => {
//     return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),5)
//    }

//opcional
const itemQuantity = (id)=>{
    const itemInCart = cart.find((item)=> item.id === id)
    if(itemInCart){
        //devolver la cantidad
        return itemInCart.quantity
    }else{
        // no existe en el carrito
        return 0
    }
}
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartQuantity, cartTotal, itemQuantity}}>
              {/* {props.children} */}
            {children}
        </CartContext.Provider>
    )
}