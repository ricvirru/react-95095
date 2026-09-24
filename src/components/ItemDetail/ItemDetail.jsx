import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useCart } from "../../context/CartContext";
import { resolveProductImage } from "../../assets/products/images";

const ItemDetail = ({ id, name, description, price, image, stock }) => {
  const { addItem } = useCart();
  const [mensaje, setMensaje] = useState("");

  const onAddToCart = (cantidad) => {
    addItem({ id, name, description, price, image, stock }, cantidad);
    setMensaje(`Se agregaron ${cantidad} producto${cantidad === 1 ? "" : "s"} al carrito.`);
  }
  return (
    <div className="contenedorItem">
        <h2>Nombre: {name}</h2>
        <h3>Precio: {price}</h3>
        <h3>Stock disponible: {stock}</h3>
        <h3>ID: {id}</h3>
        <img src={resolveProductImage(image, name)} alt={name} />
      <h3>Descripcion: {description}</h3>
      <div>
        <ItemCount initialValue={1} stock={stock} onAddToCart={onAddToCart} />
      </div>
      {mensaje && (
        <div className="item-added">
          <p className="item-added-message">{mensaje}</p>
          <Link to="/cart" className="item-added-btn">Ir al carrito</Link>
        </div>
      )}
    </div>
  )
}

export default ItemDetail