import { useState } from "react";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./config";

const productosSeed = [
  { name: "Remera", description: "Remera mangas cortas.", category: [{ idCat: 1, name: 'HOMBRES' }, { idCat: 7, name: 'PUMA' }, { idCat: 12, name: 'GOLF' }], stock: 10, price: 12000, image: "/img/remera.jpg" },
  { name: "Pantalon", description: "Pantalon tipo calza para ciclismo.", category: [{ idCat: 2, name: 'MUJERES' }, { idCat: 5, name: 'ADIDAS' }, { idCat: 10, name: 'CICLISMO' }], stock: 20, price: 14000, image: "/img/pantalon.jpg" },
  { name: "Zapatillas", description: "Zapatillas para basket.", category: [{ idCat: 3, name: 'NIÑOS' }, { idCat: 6, name: 'NIKE' }, { idCat: 9, name: 'BASQUET' }], stock: 10, price: 25000, image: "/img/zapatilla.jpg" },
  { name: "Campera", description: "Campera entrenamiento y running.", category: [{ idCat: 4, name: 'OUTLET' }, { idCat: 8, name: 'TOPPER' }, { idCat: 15, name: 'INDUMENTARIA' }], stock: 30, price: 18000, image: "/img/campera.jpg" },
  { name: "Musculosa", description: "Musculosa running y entrenamiento.", category: [{ idCat: 1, name: 'HOMBRES' }, { idCat: 5, name: 'ADIDAS' }, { idCat: 9, name: 'BASQUET' }], stock: 10, price: 9000, image: "/img/musculosa.jpg" },
  { name: "Bolso", description: "Bolso mediano, con 3 compartimientos.", category: [{ idCat: 6, name: 'NIKE' }, { idCat: 13, name: 'ACCESORIOS' }], stock: 30, price: 7500, image: "/img/bolso01.jpg" },
  { name: "Botines", description: "Botines Terreno firme, 12 tapones.", category: [{ idCat: 2, name: 'MUJERES' }, { idCat: 6, name: 'NIKE' }, { idCat: 11, name: 'FUTBOL' }], stock: 20, price: 16000, image: "/img/botines.jpg" },
  { name: "Medias", description: "Medias cortas para running, tennis.", category: [{ idCat: 1, name: 'HOMBRES' }, { idCat: 8, name: 'TOPPER' }, { idCat: 15, name: 'INDUMENTARIA' }], stock: 5, price: 4000, image: "/img/medias.jpg" },
];

const productsCollection = collection(db, "products");

const SeedProducts = () => {
  const [mensaje, setMensaje] = useState("");

  const cargarProductos = async () => {
    try {
      for (const producto of productosSeed) {
        await addDoc(productsCollection, producto);
      }
      setMensaje("Productos cargados correctamente en Firestore.");
    } catch (error) {
      console.error(error);
      setMensaje("Error al cargar los productos: " + error.message);
    }
  };

  const limpiarProductos = async () => {
    try {
      const snapshot = await getDocs(productsCollection);
      const borrados = snapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(borrados);
      setMensaje("Coleccion products vaciada.");
    } catch (error) {
      console.error(error);
      setMensaje("Error al limpiar los productos: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h2>Seed de productos</h2>
      <p>Usada una sola vez para cargar los productos en Firestore.</p>
      <button onClick={cargarProductos}>Cargar productos</button>
      <button onClick={limpiarProductos}>Limpiar productos</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default SeedProducts;