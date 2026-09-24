import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const { id : categoryId }  = useParams();
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
        console.log('productos by category: ', respuesta);
      })
      .catch(error => console.log(error))
    
  }, [categoryId]);

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