import { useState } from "react"

const misProductos = [
    {nombre:"Mouse", precio: 1500},
    {nombre:"Monitor", precio: 5500},
    {nombre:"Teclado", precio: 1500},
]

const getMisProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 2000)
    })
}

const AsyncAwait = () => {

 const [productos, setProductos] = useState([])

 const pedirDatos = async () => {
    const inventario = await getMisProductos()
    setProductos(inventario)
 }

 pedirDatos()




  return (
    <div>
        <h2>Mis productos usando Async Await:</h2>
        {
            productos.map((item, index)=>{
                return(
                    <div key={index}>
                        <p>{item.nombre}</p>
                        <p>{item.precio}</p>
                    </div>
                )
            })
        }

    </div>
  )
}

export default AsyncAwait