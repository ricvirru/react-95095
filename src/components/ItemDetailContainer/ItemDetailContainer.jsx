import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUnProducto(id)
      .then(respuesta => setProducto(respuesta))
  }, [id]);

  return (
    <div>
      <ItemDetail  {...producto} />
    </div>
  );
}

export default ItemDetailContainer