import { useState } from "react";
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
    setTimeout(() => setMensaje(""), 3000);
  }
  return (
    <div className="contenedorItem">
        <h2>Nombre: {name}</h2>
        <h3>Precio: {price}</h3>
        <h3>Stock disponible: {stock}</h3>
        <h3>ID: {id}</h3>
        <img src={resolveProductImage(image, name)} alt={name} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium possimus exercitationem aliquam, aliquid libero deleniti perspiciatis dignissimos cumque illo omnis? Et doloremque alias doloribus est dolor, saepe natus molestiae? Ut.</p>
      <div>
        <ItemCount initialValue={1} stock={stock} onAddToCart={onAddToCart} />
      </div>
      {mensaje && <div className="item-toast">{mensaje}</div>}
    </div>
  )
}

export default ItemDetail