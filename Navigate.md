# Configuración de Navegación con React Router DOM

Guía paso a paso de todos los cambios realizados para configurar la
navegación de la página usando **react-router-dom** (v7).

---

## 1. `src/App.jsx` — Rutas de la aplicación

Este archivo ya tenía `BrowserRouter` y `Routes` definidas. Se agregó una
ruta dinámica para el detalle de producto y una ruta para el filtrado por
categoría.

Antes:

```jsx
<Route path="/" element={<Home />} />
<Route path="/products" element={<ItemListContainer />} />
<Route path="/products/:productId" element={<ItemDetailContainer />} />
<Route path="/contact" element={<Contact />} />
<Route path='*' element={<NotFound />} />
```

Después (se agregó la ruta de detalle y la de categoría):

```jsx
<Route path="/" element={<Home />} />
<Route path="/products" element={<ItemListContainer />} />
<Route path="/category/:categoryName" element={<ItemListContainer />} />
<Route path="/products/:productId" element={<ItemDetailContainer />} />
<Route path="/contact" element={<Contact />} />
<Route path='*' element={<NotFound />} />
```

**Conceptos aplicados:**

- `path="/products/:productId"` → ruta dinámica; `:productId` es un parámetro
  de URL que cambia según el producto.
- `path="/category/:categoryName"` → ruta dinámica para el filtrado por
  categoría (Calzado, Ropa, Accesorios).

---

## 2. `src/components/Navbar/Navbar.jsx` — Links de navegación

### Paso 2.1: Corregir la estructura de los links

El problema original: los `Link` se usaban invertidos
(`<Link><li></li></Link>`), dejando un `<a>` como hijo directo de `<ul>`.
El CSS `.nav-links li a` nunca se aplicaba y los links quedaban con el
estilo por defecto del navegador (azul y subrayado).

Antes:

```jsx
<Link to="/"><li> Home</li></Link>
```

Después (estructura correcta y semántica):

```jsx
<li><NavLink to="/" end> Home</NavLink></li>
```

### Paso 2.2: Usar `NavLink` para el estado activo

Se reemplazó `Link` por `NavLink` en Home, Productos (luego eliminado) y
Contacto. `NavLink` agrega automáticamente la clase `active` a la opción que
coincide con la URL actual, lo que permite estilizarla.

- `end` en Home: evita que "Home" quede activo en todas las rutas (solo lo
  está cuando la URL es exactamente `/`).

### Paso 2.3: Quitar "Productos" y apuntar las categorías al filtrado

Se eliminó la opción "Productos" del Navbar (el listado pasó al home) y las
categorías ahora navegan a rutas que filtran por categoría:

```jsx
<li><Link to="/category/Calzado"> Calzado</Link></li>
<li><Link to="/category/Ropa"> Ropa</Link></li>
<li><Link to="/category/Accesorios"> Accesorios</Link></li>
```

Las categorías se dejan como `Link` y no `NavLink` para que no queden todas
activas a la vez.

---

## 3. `src/components/Navbar/Navbar.css` — Estilos del Navbar

Se reescribió el CSS para que coincida con la estructura
`.nav-links li a` real y se agregaron estilos de estado activo.

- Fondo más oscuro: `background-color: #1f2937;`
- Borde inferior y sombra para dar profundidad.
- Texto de los links en **blanco** (`color: #ffffff`).
- Enlaces con `border-radius` y padding para verse como "píldoras".
- Hover: fondo azul semitransparente + leve elevación.
- Clase `.active`: fondo sólido `#667eea` con sombra, para destacar la
  opción actual.

```css
.app-navbar .nav-links li a.active {
    color: #ffffff;
    background-color: #667eea;
    box-shadow: 0 2px 6px rgba(102, 126, 234, 0.5);
}
```

---

## 4. `src/components/Item/Item.jsx` — "Ver detalles"

Se envolvvió el botón "Ver detalles" en un `Link` que navega a la ruta
dinámica del producto:

```jsx
import { Link } from 'react-router-dom';

<Link to={`/products/${id}`}><button> Ver detalles</button></Link>
```

Al hacer click, la URL pasa a ser `/products/3`, por ejemplo, y se muestra
el detalle de ese producto.

---

## 5. `src/components/ItemDetailContainer/ItemDetailContainer.jsx` — Parámetros de URL

Se reemplazó el id hardcodeado (`getUnProducto(2)`) por el parámetro de la
URL usando `useParams`:

```jsx
import { useParams } from "react-router-dom";

const { productId } = useParams();

useEffect(() => {
  getUnProducto(Number(productId))
    .then(respuesta => setProducto(respuesta))
}, [productId]);
```

- `useParams()` lee los parámetros definidos en la ruta (`:productId`).
- `Number(productId)` convierte el string de la URL a número para comparar
  con los id del `asyncmock`.
- El `useEffect` depende de `productId`, por lo que se vuelve a ejecutar si
  se cambia de producto sin recargar la página.

---

## 6. `src/components/Home/Home.jsx` — Listado en el home

Se renderizó `ItemListContainer` dentro de `Home` para que el listado de
productos se vea en la página principal:

```jsx
import ItemListContainer from "../ItemListContainer/ItemListContainer";

<ItemListContainer />
```

---

## 7. `src/components/ItemListContainer/ItemListContainer.jsx` — Filtrado por categoría

### Paso 7.1: Leer la categoría de la URL

Se usa `useParams` para obtener la categoría actual:

```jsx
const { categoryName } = useParams();
```

### Paso 7.2: Pasar la categoría a la búsqueda

El `useEffect` ahora depende de `categoryName` y se lo pasa a
`getProductos`:

```jsx
useEffect(() => {
  getProductos(categoryName)
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))
}, [categoryName]);
```

Al depender de `categoryName`, cada vez que se navega a una categoría
distinta, la lista se refresca.

### Paso 7.3: Estilos del buscador

Se creó el archivo `ItemListContainer.css` y se aplicaron clases al bloque de
búsqueda (`buscador`, `buscador-input`, `buscador-btn`, `buscador-badge`):

- Contenedor blanco con borde, radio y sombra suave.
- Badge "Mostrando productos" azul.
- Input con foco resaltado (`border-color` + anillo).
- Botón "Buscar" azul con hover.

---

## 8. `src/asyncmock.js` — Datos y filtrado

### Paso 8.1: Categorías coherentes con el Navbar

Se normalizaron las categorías de los productos para que coincidan con las
opciones del Navbar (Ropa, Calzado, Accesorios), por ejemplo:

```js
{id: 3, name: "Zapatillas", category: [{idCat: 3, name: 'Calzado'}, {idCat: 6, name: 'NIKE'}], ...}
{id: 7, name: "Botines",    category: [{idCat: 3, name: 'Calzado'}, {idCat: 6, name: 'NIKE'}], ...}
```

### Paso 8.2: Filtrar por categoría

`getProductos` ahora acepta una categoría opcional y filtra los productos
cuyo array `category` contenga ese nombre (comparación sin distinguir
mayúsculas/minúsculas):

```js
export const getProductos = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!categoria) {
        resolve(misProductos)
      } else {
        const productos = misProductos.filter((item) =>
          item.category.some((cat) => cat.name.toLowerCase() === categoria.toLowerCase())
        )
        resolve(productos)
      }
    }, 2000)
  })
}
```

- `filter` recorre todos los productos.
- `some` verifica que al menos una categoría del producto coincida.

---

## Resumen de archivos modificados

| Archivo | Cambio |
| --- | --- |
| `src/App.jsx` | Rutas dinámicas `/products/:productId` y `/category/:categoryName` |
| `src/components/Navbar/Navbar.jsx` | Estructura corregida, `NavLink` con estado activo, categorías que filtran |
| `src/components/Navbar/Navbar.css` | Estilos visibles con texto blanco y estado activo |
| `src/components/Item/Item.jsx` | Botón "Ver detalles" navega a `/products/:id` |
| `src/components/ItemDetailContainer/ItemDetailContainer.jsx` | `useParams` para leer el `productId` |
| `src/components/Home/Home.jsx` | Renderiza `ItemListContainer` (listado en el home) |
| `src/components/ItemListContainer/ItemListContainer.jsx` | `useParams` para categoría + estilos del buscador |
| `src/components/ItemListContainer/ItemListContainer.css` | Estilos del bloque de búsqueda |
| `src/asyncmock.js` | Categorías normalizadas + filtrado por categoría |

---

## Comandos para verificar

```bash
npm run lint   # valida el código (sin errores)
npm run dev    # levanta el servidor de desarrollo
```