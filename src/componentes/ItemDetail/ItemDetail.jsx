import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium possimus exercitationem aliquam, aliquid libero deleniti perspiciatis dignissimos cumque illo omnis? Et doloremque alias doloribus est dolor, saepe natus molestiae? Ut.</p>
    </div>
  )
}

export default ItemDetail