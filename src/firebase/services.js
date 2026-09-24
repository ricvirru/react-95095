import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./config";
import {
  getProducts as getProductsMock,
  getUnProducto as getUnProductoMock,
} from "../asyncmock";

const productsCollection = collection(db, "products");
const ordersCollection = collection(db, "orders");

export const getProducts = async (categoryId) => {
  try {
    const snapshot = await getDocs(productsCollection);
    const productos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (!categoryId) {
      return productos;
    }

    return productos.filter((producto) =>
      producto.category.some((cat) => cat.idCat === Number(categoryId))
    );
  } catch (error) {
    console.error("Error obteniendo los productos de Firestore. Usando datos mock:", error);
    return getProductsMock(categoryId);
  }
};

export const getProductById = async (id) => {
  try {
    const snapshot = await getDoc(doc(db, "products", id));
    if (!snapshot.exists()) {
      return null;
    }
    return { id: snapshot.id, ...snapshot.data() };
  } catch (error) {
    console.error("Error obteniendo el producto de Firestore. Usando datos mock:", error);
    return getUnProductoMock(id);
  }
};

export const createOrder = async (order) => {
  const orderRef = await addDoc(ordersCollection, {
    ...order,
    date: Timestamp.fromDate(new Date()),
  });
  return orderRef.id;
};