import { Link } from "react-router-dom";
import "./CartWidget.css";
import imgCarrito from "../../assets/cart-image.png";
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget-link">
      <div className="cart-widget">
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
      </div>
    </Link>
  )
}

export default CartWidget