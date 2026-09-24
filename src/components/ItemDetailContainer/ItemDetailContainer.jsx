import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../firebase/services";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then(respuesta => {
        setProducto(respuesta)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [id]);

  return (
    <div>
      {loading
        ? <Loading texto="Cargando detalle del producto..." />
        : producto && <ItemDetail {...producto} />}
    </div>
  );
}

export default ItemDetailContainer