export const products = [
    {
        name:'Random 2',
        price:500,
        description:'lorem ipsums lore lorem',
        stock:15,
        img:'../logo-shop.png',
        category:'ofertas'
    },
    {
        name:'Random 3',
        price:8000,
        stock:8,
        description:'lorem ipsums lore lorem',
        img:'https://picsum.photos/200',
         category:'mas vendidos'
    },
    {
        name:'Random 4',
        price:9000,
        stock:18,
        description:'lorem lore lorem',
        img:'https://jumboargentina.vtexassets.com/arquivos/ids/808402/Caramelos-Palitos-De-La-Selva-X150g-1-1005532.jpg?v=638422476307330000',
        category:'nuevos'
    }
]
let error =false

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}

//LOS ID COMO STRING
export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}

//SI TENGO LOS IDS COMO NUMBER, PARSEO EL ID QUE VIENE POR PARAMETRO
// export const getOneProduct = (id)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(!error){
//                 let oneProduct= products.find((item)=> item.id === Number(id))
//                 let oneProduct= products.find((item)=> item.id === parseInt(id))
//                 resolve(oneProduct)
//             }else{
//                 reject('Hubo un error, intente más tarde')
//             }
//         },3000)
//     })
// }

