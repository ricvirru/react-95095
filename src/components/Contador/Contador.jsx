import { useState } from "react";
import "./Contador.css";

const Contador = () => {
  const [cantidad, setCantidad] = useState(10);

  const sumar = () => setCantidad(cantidad + 1);
  const restar = () => setCantidad(cantidad - 1);
  const reiniciar = () => setCantidad(1000);

  return (
    <div className="contador-container">
      <h2>Contador</h2>
      
      <div className="numero">
        {cantidad}
      </div>
      
      <div className="grupo-botones">
        <button 
          className="btn btn-restar" 
          onClick={restar}
        >
          −
        </button>
        
        <button 
          className="btn btn-sumar" 
          onClick={sumar}
        >
          +
        </button>
        
        <button
          className="btn btn-reiniciar"
          onClick={reiniciar}
        >
          ↺
        </button>
        
        <button 
          className="btn btn-mas5" 
          onClick={() => setCantidad(cantidad + 5)}
        >
          +5
        </button>
      </div>
    </div>
    );
}

export default Contador;