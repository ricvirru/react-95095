import Contador from "./components/Contador/Contador";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  const headerData = {
    titulo: 'Mi comercio - 3 Estrellas',
    subtitulo: 'Benvenidosssss'
  };

  return (
    <div>
      <Header titulo={headerData.titulo} subtitulo={headerData.subtitulo}  />
      <Navbar />      
      <main className="app-main">
        <h2 className="verde">Contenido principal de la pagina</h2>
        <p>
          Benvenidos a la pagina...
        </p>
        <p>
          Los productos mas vendidos
        </p>
      </main>
      <Contador />
      <Footer />
    </div>
  )
}

export default App
