import { useState, useEffect } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0)

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

    useEffect(()=>{
        /* Aca dentro de la funcion colo lo que quiero que se ejecute como efecto secundario*/
        document.title = `Contador: ${contador}`
    },[contador])

  return (
    <div>
        <button onClick={sumarContador}> + </button>
        <strong>{contador}</strong>
        <button onClick={restarContador}> - </button>
    </div>
  )
}

export default Contador