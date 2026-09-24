// import React from 'react'
import { Link } from "react-router-dom";
import { resolveProductImage } from "../../assets/products/images";
import "./Item.css";

const Item = ({ id, name, price, image, category, stock }) => {
  return (
    <div className='cardProducto'>
        <img src={resolveProductImage(image, name)} alt={name} />
        <h3>Nombre: {name}</h3>
      <p>Precio: {price}</p>
      <p>Categoria: {category.map(cat => cat.name).join(", ")}</p>
      <p>Stock: {stock}</p>
        <Link to={`/products/${id}`}><button>Ver detalle</button></Link>

    </div>
  )
}

export default Item