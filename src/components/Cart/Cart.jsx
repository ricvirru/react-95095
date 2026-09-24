import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart, totalQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Tu carrito esta vacio</h2>
        <p className="cart-empty-message">Agrega productos para comenzar tu compra.</p>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Mi Carrito de Compras</h2>

      <div className="cart-items">
        {cart.map((prod) => (
          <div key={prod.id} className="cart-item">
            <img src={prod.image} alt={prod.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{prod.name}</h3>
              <p>Precio: ${prod.price}</p>
              <p>Cantidad: {prod.cantidad}</p>
              <p>Subtotal: ${prod.price * prod.cantidad}</p>
            </div>
            <button className="cart-item-remove" onClick={() => removeItem(prod.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p className="cart-summary-row">Total de productos: {totalQuantity}</p>
        <p className="cart-summary-row cart-summary-total">Total: ${totalPrice}</p>
        <div className="cart-actions">
          <button className="cart-clear" onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;