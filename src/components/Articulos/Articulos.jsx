

const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h3>{titulo}</h3>
        {children}
    </article>
  )
}

export default Articulos