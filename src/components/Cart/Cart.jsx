import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../firebase/services";
import Loading from "../Loading/Loading";
import { resolveProductImage } from "../../assets/products/images";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart, totalQuantity, totalPrice } = useCart();
  const [consumer, setConsumer] = useState({ name: "", email: "", confirmEmail: "", phone: "" });
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  const [generating, setGenerating] = useState(false);

  const handleChange = (e) => {
    setConsumer({ ...consumer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !consumer.name.trim() ||
      !consumer.email.trim() ||
      !consumer.confirmEmail.trim() ||
      !consumer.phone.trim()
    ) {
      setError("Completa todos los campos.");
      return;
    }

    if (consumer.email !== consumer.confirmEmail) {
      setError("El email y su confirmacion no coinciden.");
      return;
    }

    try {
      setGenerating(true);

      const order = {
        consumer,
        products: cart.map((prod) => ({
          id: prod.id,
          description: prod.description,
          price: prod.price,
          quantity: prod.cantidad,
        })),
        status: true,
        total: totalPrice,
      };

      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      setError("No se pudo generar la orden: " + err.message);
    } finally {
      setGenerating(false);
    }
  };

  if (orderId) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Compra registrada</h2>
        <p className="cart-empty-message">Gracias por tu compra.</p>
        <p className="cart-order-id">ID de orden: {orderId}</p>
      </div>
    );
  }

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
      <div className="cart-header">
        <h2 className="cart-title">Mi Carrito de Compras</h2>
        <button type="button" className="cart-header-clear" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>

      <div className="cart-items">
        {cart.map((prod) => (
          <div key={prod.id} className="cart-item">
            <img src={resolveProductImage(prod.image, prod.name)} alt={prod.name} className="cart-item-img" />
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
      </div>

      <form className="cart-checkout" onSubmit={handleSubmit}>
        <h3 className="cart-checkout-title">Datos del consumidor</h3>
        <input
          className="cart-checkout-input"
          type="text"
          name="name"
          placeholder="Nombre y apellido"
          value={consumer.name}
          onChange={handleChange}
          required
        />
        <input
          className="cart-checkout-input"
          type="email"
          name="email"
          placeholder="Email"
          value={consumer.email}
          onChange={handleChange}
          required
        />
        <input
          className="cart-checkout-input"
          type="email"
          name="confirmEmail"
          placeholder="Confirmar email"
          value={consumer.confirmEmail}
          onChange={handleChange}
          required
        />
        <input
          className="cart-checkout-input"
          type="tel"
          name="phone"
          placeholder="Telefono"
          value={consumer.phone}
          onChange={handleChange}
          required
        />
        {error && <p className="cart-checkout-error">{error}</p>}
        {generating && <Loading texto="Generando tu orden..." />}
        <div className="cart-actions">
          <button type="submit" className="cart-checkout-btn" disabled={generating}>
            {generating ? "Generando..." : "Generar orden"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cart;