import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initialValue, stock, onAddToCart }) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => {
    setCount((prev) => Math.min(prev + 1, stock));
  };

  const handleSubtract = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  const handleOnAddCart = () => {
    onAddToCart(count);
  }

  const disabledAdd = count >= stock || stock <= 0;
  const disabledSubtract = count <= 0;

  return (
    <div className="contador">
      <div className="contador-info">
        <span className="contador-cantidad">{count}</span>
        <span className="contador-stock">Stock: {stock}</span>
      </div>

      <div className="contador-botones">
        <button
          className="contador-btn contador-btn-restar"
          onClick={handleSubtract}
          disabled={disabledSubtract}
        >
          −
        </button>
        <button
          className="contador-btn contador-btn-sumar"
          onClick={handleAdd}
          disabled={disabledAdd}
        >
          +
        </button>
      </div>

      <button
        className="contador-agregar"
        disabled={count === 0 || count > stock}
        onClick={handleOnAddCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;