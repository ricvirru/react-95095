import { useState, useEffect } from "react"


const JsonPlaceHolder = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        /* fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(res => setUsuarios(res))
        .catch(error => console.log(error)) */
        try{
             const pedirUsuario = async() =>{
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await respuesta.json()
                setUsuarios(data)
             }
             pedirUsuario()
        } catch(error){
            console.log(error)
        }

    },[])

  return (
    <div>
        <h2>Usuarios traidos desde JsonPlaceHolder</h2>
        <ul>
            {
                usuarios.map(usuario=>{
                    return(
                        <li key={usuario.id}>
                            {usuario.name}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default JsonPlaceHolder