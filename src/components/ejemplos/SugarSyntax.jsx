//Spread Operator

//Antes
const numeros = [1,2,3]
const numerosNuevos = numeros.concat([4,5,6])
console.log(numerosNuevos) //[1,2,3,4,5,6]

//Ahora
const numeroNuevosSugar =[...numeros,4,5,6]


//Destructuring

//Arrays

//Antes
const colores=['rojo', 'verde', 'violeta']
const primerColor = colores[0]
const segundoColor = colores[1]

//Ahora
const [primero]= colores

//destructuring de Objetos
//antes
const persona ={nombre:'Juan', edad:25, ciudad:'Mendoza'}
const nombre=persona.nombre

//ahora

const {edad, ciudad}= persona

console.log(edad, ciudad)

//Operador ternario

// let mensaje;
// if(edad >= 18){
//     mensaje= 'Sos mayor de edad'
// }else{
//     mensaje='Sos menor de edad'
// }

// Ahora

// const mensajeSugar = edad >=18 ? "Sos mayor de edad" : "Sos menor de edad"

// Operador || para valores por defecto

let userName =null
let mensaje;
if(userName){
    mensaje=userName
}else{
    mensaje='Invitado'
}

//Ahora 
const MensajeSugar= userName || "Invitado"

//Functions

// function sumar (a,b){
//     return a+b
// }

// const sumar = (a,b)=>{
//     return a+b
// }

const sumarSuperSugar = (a,b) => a+b