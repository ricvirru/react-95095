import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const headerData = {
    titulo: 'Mi comercio - 3 Estrellas',
    subtitulo: 'Benvenidosssss'
  };

  return (
    <div>
      <BrowserRouter>
        <Header titulo={headerData.titulo} subtitulo={headerData.subtitulo}  />
        <Navbar />
          {/* <ItemDetailContainer /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={ <NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
