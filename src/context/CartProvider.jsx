import { useState, useMemo } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    setCart((prev) => {
      const yaEnCarrito = prev.some((prod) => prod.id === item.id);

      if (yaEnCarrito) {
        return prev.map((prod) =>
          prod.id === item.id
            ? { ...prod, cantidad: prod.cantidad + cantidad }
            : prod
        );
      }

      return [...prev, { ...item, cantidad }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};