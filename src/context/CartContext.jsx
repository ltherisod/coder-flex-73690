import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext()

//Crear nuestro proveedor

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])
   //Todas las funciones que modifiquen ese estado
   
    return(
        <CartContext.Provider value={{cart}}>
              {/* {props.children} */}
            {children}
        </CartContext.Provider>
    )
}