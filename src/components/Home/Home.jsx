import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main className="app-main">
        <section className="home-hero">
          <div className="home-hero-inner">
            <span className="home-hero-badge">Tienda oficial</span>
            <h1 className="home-hero-title">Bienvenidos a 3 Estrellas</h1>
            <p className="home-hero-subtitle">
              Equipamiento y ropa deportiva para entrenar como siempre soñaste.
            </p>
          </div>
        </section>
      </main>
      <ItemListContainer />
    </>
  );
}

export default Home;