import React from 'react'

const Map = () => {


    const productos = [
        {id:1, nombre:"PC Gamer", precio: 3000000},
        {id:2, nombre:"Teclado Gamer", precio: 150000},
        {id:3, nombre:"Silla Gamer", precio: 300000},
        {id:4, nombre:"Mouse Gamer", precio: 80000}
    ]


  return (
    <div>
        <h1>Productos Gamer:</h1>

        <ul>
            {productos.map((producto)=>(
                <li key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.precio}</p>
                </li>
            ))

            }
        </ul>

    </div>
  )
}

export default Map