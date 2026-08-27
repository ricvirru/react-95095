import React from 'react'
import Articulos from './components/Articulos/Articulos'
import ComponenteX from './components/ComponenteX/ComponenteX'
import Contador from './components/Contador/Contador'
import ComponenteRef from './components/ComponenteRef/ComponenteRef'
import Promesas from './components/Promesas/Promesas'
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
    {/* <Articulos img={"https://picsum.photos/200/300"} titulo="Alimentos para gatos"/>
    <Articulos img={"https://picsum.photos/200/300"} titulo="Vacunas para gatos"/>
    <Articulos img={"https://picsum.photos/200/300"} titulo="Juguetes para gatos">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet odio aliquam soluta totam pariatur dolores praesentium maiores, incidunt aperiam modi doloremque earum vero? Eligendi sapiente necessitatibus in eveniet libero.</p>
    <h2>Los mejores juguetes</h2>
    <ComponenteX/>
    </Articulos> */}

    {/* <Contador/> */}

    {/* <ComponenteRef/> */}

    {/* <Promesas/> */}
    
    {/* <Map/> */}

    <Navbar/>
    <ItemListContainer texto="textooooooooo"/>

    </>
  )
}

export default App