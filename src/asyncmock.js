const misProductos = [
    {id: 1, name:"Remera", description:"Remera mangas cortas.", category: [{idCat:1, name:'HOMBRES'}, {idCat:7, name:'PUMA'}, {idCat:12, name:'GOLF'}], stock:10, price:12000, image:'../../src/assets/products/remera.jpg'},
    {id: 2, name:"Pantalon", description:"Pantalon tipo calza para ciclismo.", category: [{idCat:2, name:'MUJERES'}, {idCat:5, name:'ADIDAS'}, {idCat:10, name:'CICLISMO'}],  stock:20, price:14000, image:'../../src/assets/products/pantalon.jpg'},
    {id: 3, name:"Zapatillas", description:"Zapatillas para basket.", category: [{idCat: 3, name:'NIÑOS'}, {idCat:6, name:'NIKE'}, {idCat:9, name:'BASQUET'}], stock:10, price:25000, image:'../../src/assets/products/zapatilla.jpg'},
    {id: 4, name:"Campera", description:"Campera entrenamiento y running.", category: [{idCat: 4, name:'OUTLET'}, {idCat:8, name:'TOPPER'}, {idCat:15, name:'INDUMENTARIA'}], stock:30, price:18000, image:'../../src/assets/products/campera.jpg'},
    {id: 5, name:"Musculosa", description:"Musculosa running y entrenamiento.", category: [{idCat: 1, name:'HOMBRES'}, {idCat:5, name:'ADIDAS'}, {idCat:9, name:'BASQUET'}], stock:10, price:9000, image:'../../src/assets/products/musculosa.jpg'},
    {id: 6, name:"Bolso", description:"Bolso mediano, con 3 compartimientos.", category: [{idCat: 6, name:'NIKE'}, {idCat:13, name:'ACCESORIOS'}], stock:30, price:7500, image:'../../src/assets/products/bolso01.jpg'},
    {id: 7, name:"Botines", description:"Botines Terreno firme, 12 tapones.", category: [{idCat: 2, name:'MUJERES'}, {idCat:6, name:'NIKE'}, {idCat:11, name:'FUTBOL'}], stock:20, price:16000, image:'../../src/assets/products/botines.jpg'},
    {id: 8, name:"Medias", description:"Medias cortas para running, tennis.", category: [{idCat: 1, name:'HOMBRES'}, {idCat:8, name:'TOPPER'}, {idCat:15, name:'INDUMENTARIA'}], stock:5, price:4000, image:'../../src/assets/products/medias.jpg'}
]

export const getProducts = (categoryId) =>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      if (!categoryId) {
        resolve(misProductos);
      } else {
        const productosFiltrados = misProductos.filter(producto => producto.category.some(cat => cat.idCat === categoryId));
        resolve(productosFiltrados);
      }
    }, 2000)
  })
}

export const getUnProducto = (id) =>{
  return new Promise(resolve =>{
    setTimeout(()=>{
      const producto = misProductos.find(item => item.id === Number(id));
      resolve(producto)
    }, 2000)
  })
}