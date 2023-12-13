class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 1;
  }
}

const REMERA1 = new Producto (1, 'Remera 1', 100);
const REMERA2 = new Producto (2, 'Remera 2', 200);
const REMERA3 = new Producto (3, 'Remera 3', 300);
const REMERA4 = new Producto (4, 'Remera 4', 400);

const PRODUCTOS = [REMERA1, REMERA2, REMERA3, REMERA4];

let carrito = [];

const CONTENEDOR_PRODUCTOS = document.getElementById("listaProductos");

const MOSTRAR_PRODUCTOS = () => {
  PRODUCTOS.forEach(producto =>{
    const card = document.createElement("div");
    //quite la imagen porque se me iba mucho el tamanio y lo escribi asi porque no tengo enie
    card.innerHTML = 
    `
    <img src="" alt="">
    <div>
      <h2>${producto.nombre}</h2>
      <p>${producto.precio}</p>
      <button id="boton${producto.id}">agregar producto</button>
    </div>
    `

  CONTENEDOR_PRODUCTOS.appendChild(card);

  const BOTON = document.getElementById(`boton${producto.id}`)
  BOTON.addEventListener("click", () => {
    agregarCarrito(producto.id);
  })

  });
}

MOSTRAR_PRODUCTOS();

const agregarCarrito = (id) =>{
  const productoEnCarrito = carrito.find(producto => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito++;
  } else {
      const producto = PRODUCTOS.find(producto => producto.id === id); 
      carrito.push(producto);
    }

    console.log(carrito);
} 

const listaCarrito = document.getElementById("listaCarrito");
const carritoVer = document.getElementById("carritoVer");

carritoVer.addEventListener("click", () => {
  mostrarCarrito();
})

const mostrarCarrito = () => {
  listaCarrito.innerHTML = ` `;
  listaCarrito.forEach(producto =>{
    const card = document.createElement("div");
    listaCarrito.innerHTML = 
    `
    <img src="" alt="">
    <div>
      <h2>${producto.nombre}</h2>
      <p>${producto.precio}</p>
      <button id="botonEliminar${producto.id}">eliminar producto</button>
    </div>
    `

    listaCarrito.appendChild(card);

    const boton = getElementById(`botonEliminar${producto.id}`);
    boton.addEventListener("click", () => {
      eliminarProducto(producto.id);
    })
  })

}

const eliminarProducto = (id) =>{
  const producto = carrito.find(producto => producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice,1);

  mostrarCarrito();
} 