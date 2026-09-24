import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import SeedProducts from "./firebase/SeedProducts";

const ProductListPage = () => {
  const { id } = useParams();
  return <ItemListContainer key={id} />;
};

const ProductDetailPage = () => {
  const { id } = useParams();
  return <ItemDetailContainer key={id} />;
};

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:id" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/seed" element={<SeedProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={ <NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
