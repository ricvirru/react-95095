import "./App.css"
import Boton from "./components/Boton/Boton"

const App = () => {

 let nombre= "Alesio"

  return (

    <div>
      <h1>Hola Mundo!!</h1>
      <h2 className="verde">Esta es la primera clase de React</h2>
      <h3>Hola, soy el profe {nombre}</h3>
      <p>tengo {30 + 4} años</p>
      <Boton/>
      <Boton></Boton>
    </div>
    

  )
}

export default App
