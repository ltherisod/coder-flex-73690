import {useState, useEffect} from 'react'
//imports arriba del componente
const ItemCount = ({stock}) => {
    //logica, funciones, hook
    //declaracion del hook
    const [count, setCount]= useState(1)
    const [compra, setCompra]=useState(false)
    //explicaciones del useEffect

    //se va a ejecutar siempre.
    //no es recomendables
    useEffect(()=>{
        console.log('ME EJECUTO SIEMPRE')
    })

    //se ejecuta una sola vez, cuando se monta el componente
    useEffect(()=>{
        console.log('ME EJECUTO UNA SOLA VEZ')
    },[])

    //se ejecuta cuando monta componente y cada vez que cambia lo que esta escuchando
    useEffect(()=>{
        console.log('ME EJECUTO CUANDO MONTA EL COMPONENTE Y SIEMPRE QUE COMPRA CAMBIE',compra)
    },[compra])

    

    const comprar = () =>{
        setCompra(!compra)
    }



    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const sumar = () =>{
        if(count < stock){

            setCount (count + 1)
        }
    }
    console.log('Soy ItemCount')


  return (
   <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
     <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span  className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={comprar}>Agregar al carrito</button>
   </div>
  )
}
//exportamos el componente
export default ItemCount