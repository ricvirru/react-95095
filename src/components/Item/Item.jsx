// import React from 'react'
import "./Item.css";

const Item = ({ id, name, price, image }) => {
  return (
    <div className='cardProducto'>
        <img src={image} alt={name} />
        <h3>Nombre: {name}</h3>
        <p>Precio: {price}</p>
        <p>ID: {id}</p>
        <button> Ver detalles</button>

    </div>
  )
}

export default Item