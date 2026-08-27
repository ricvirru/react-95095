import { useState, useEffect } from "react"

const Nesflic = () => {

    const [peliculas, setPeliculas] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const MI_KEY= "788f0d2a"

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => setPeliculas(data.Search))
            .catch(error => console.log(error))
    },[busqueda])

    //funcion auxiliar para cargar el estado "busqueda con los datos del input"

    const manejadorSubmit = (event) =>{
        event.preventDefault()
        setBusqueda(event.target.busqueda.value)
        console.log(event.target.busqueda.value)
        event.target.busqueda.value ="" 
    }

  return (
    <>
        <h1>Nesflic</h1>
        <form onSubmit={manejadorSubmit}>
            <input type="text" name="busqueda" />
            <button type="submit"> Buscar Pelicula </button>


            <ul>
                {
                    peliculas === undefined ? <h2> La pelicula no está disponible en nuestra base de datos</h2> : peliculas.map(peli=>(
                        <li>
                            <img src={peli.Poster} alt={peli.Title} />{peli.Title}
                        </li>
                    ))
                }

            </ul>
        </form>
    </>
  )
}

export default Nesflic