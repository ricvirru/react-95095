import { useState } from "react";
import "./Contador.css";

const Contador = ({initialValue, stock, onAddToCart}) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);

  const handleOnAddCart = () => {
    onAddToCart(count);
  }

  return (
    <div className="contador-container">
      {/* <h2>Contador</h2> */}
      
      <div className="numero">
        {count}
      </div>
      
      <div className="grupo-botones">
        <button 
          className="btn btn-restar" 
          onClick={handleSubtract}
        >
          −
        </button>
        
        <button 
          className="btn btn-sumar" 
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div>
        <button className="btn btn-agregar" disabled={count === 0 || count > stock} onClick={handleOnAddCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
    );
}

export default Contador;