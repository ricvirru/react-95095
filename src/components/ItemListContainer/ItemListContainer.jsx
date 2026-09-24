import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../firebase/services"
import Loading from "../Loading/Loading"
import "./ItemListContainer.css"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: categoryId } = useParams();
  const [filtroProducto, setFiltroProducto] = useState("");
  const handleOnChange = (e) => {
    setFiltroProducto(e.target.value);
    console.log(filtroProducto);
  }

  const handleSearch = () => {
    console.log("Buscando producto: " + filtroProducto);
  }

  useEffect(() => {
    getProducts(Number(categoryId))
      .then(respuesta => {
        setProductos(respuesta)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

  }, [categoryId]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
      <div className="buscador">
        <span className="buscador-badge">
          Mostrando productos
        </span>
        <input className="buscador-input" onChange={handleOnChange} type="text" placeholder="Buscar producto..." />
        <button className="buscador-btn" onClick={handleSearch}>Buscar</button>
      </div>

      {loading
        ? <Loading texto="Cargando productos..." />
        : <ItemList productos={productos} />}
    </>
  )
}

export default ItemListContainer