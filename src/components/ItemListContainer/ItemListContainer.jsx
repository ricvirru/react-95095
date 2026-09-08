import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [filtroProducto, setFiltroProducto] = useState("");
  const handleOnChange = (e) => {
    setFiltroProducto(e.target.value);
    console.log(filtroProducto);
  }

  const handleSearch = () => {
    console.log("Buscando producto: " + filtroProducto);
  }

  useEffect(()=>{
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
  },[])

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
      <div>
        <span>
          Mostrando productos
        </span>
        <input onChange={handleOnChange} type="text" placeholder="Buscar producto..." />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer