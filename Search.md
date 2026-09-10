# Buscador de productos por nombre

Paso a paso de los cambios realizados para implementar el buscador de
productos que filtra por **nombre** (usando react-router-dom + asyncmock).

---

## ¿Qué buscamos lograr?

Al escribir un texto en el buscador y presionar "Buscar" (o Enter), la lista
de productos se filtra mostrando únicamente aquellos cuyo **nombre** contiene
el texto ingresado. El filtro se combina con el de categoría, si se está en
una (ej: dentro de "Calzado" buscar "Nike" o "Zapa").

---

## 1. `src/asyncmock.js` — Filtrado en el "backend" simulado

`getProductos` antes solo recibía la categoría opcional. Ahora recibe un
segundo parámetro con el texto de búsqueda y filtra por nombre.

Antes:

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

Después:

```js
export const getProductos = (categoria, busqueda) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let productos = misProductos

      if (categoria) {
        productos = productos.filter((item) =>
          item.category.some((cat) => cat.name.toLowerCase() === categoria.toLowerCase())
        )
      }

      if (busqueda && busqueda.trim()) {
        const texto = busqueda.trim().toLowerCase()
        productos = productos.filter((item) =>
          item.name.toLowerCase().includes(texto)
        )
      }

      resolve(productos)
    }, 2000)
  })
}
```

**Conceptos aplicados:**

- `let productos = misProductos` → se parte de la lista completa y se van
  aplicando filtros encadenados.
- Se mantiene el filtro por **categoría** si viene informada.
- El filtro por **nombre** usa:
  - `busqueda.trim()` → elimina espacios vacíos al inicio/fin (y evita
    buscar con un texto de solo espacios).
  - `.toLowerCase()` → hace la comparación sin distinguir mayúsculas de
    minúsculas (buscar "zapa" encuentra "Zapatillas").
  - `.includes(texto)` → busca la subcadena en el nombre, no solo
    coincidencias exactas.

---

## 2. `src/components/ItemListContainer/ItemListContainer.jsx` — Conectar la búsqueda

### Paso 2.1: Handler de búsqueda

El botón "Buscar" antes solo hacía `console.log`. Ahora llama a
`getProductos` con la categoría actual y el texto del buscador, y actualiza
la lista con el resultado:

```jsx
const handleSearch = () => {
  getProductos(categoryName, filtroProducto)
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))
}
```

- `categoryName` viene de `useParams` (la categoría actual de la URL, puede
  ser `undefined` en el home, donde no hay filtro de categoría).
- `filtroProducto` es el estado que se actualiza en cada cambio del input.

### Paso 2.2: Buscar con Enter

Se agrega un handler para que el input también dispare la búsqueda al
presionar Enter:

```jsx
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
}
```

Y se conecta al input:

```jsx
<input
  className="buscador-input"
  onChange={handleOnChange}
  onKeyDown={handleKeyDown}
  type="text"
  placeholder="Buscar producto..."
/>
```

---

## Resumen del flujo

1. El usuario escribe en el input → `handleOnChange` actualiza
   `filtroProducto`.
2. Presiona "Buscar" (o Enter) → `handleSearch`.
3. Se llama a `getProductos(categoryName, filtroProducto)`.
4. `asyncmock.js` filtra por categoría (si aplica) y por nombre.
5. `setProductos(respuesta)` actualiza la lista → `ItemList` renderiza solo
   los productos que coinciden.

## Archivos modificados

| Archivo | Cambio |
| --- | --- |
| `src/asyncmock.js` | `getProductos` ahora filtra también por nombre |
| `src/components/ItemListContainer/ItemListContainer.jsx` | `handleSearch` filtra de verdad + busqueda con Enter |

## Comandos para verificar

```bash
npm run lint   # valida el código (sin errores)
npm run dev    # levanta el servidor de desarrollo y probar el buscador
```