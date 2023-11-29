const productos = [
  { nombre: 'Producto 1', precio: 100 },
  { nombre: 'Producto 2', precio: 200 },
  { nombre: 'Producto 3', precio: 300 },
  { nombre: 'Producto 4', precio: 400 },
  { nombre: 'Producto 5', precio: 500 }
];

function mostrarProductos() {
  const listaProductos = document.getElementById('listaProductos');
  listaProductos.innerHTML = '';
  for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      const li = document.createElement('li');
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      listaProductos.appendChild(li);
  }
}


// filtro precio
const filtroPrecio = (min, max) => {
  return productos.filter(producto => producto.precio >= min && producto.precio <= max);
};

// filtro nombre
const filtroNombre = (nombre) => {
  return productos.filter(product => product.nombre.toLowerCase().includes(nombre.toLowerCase()));
};

// ejemplo de busqueda y filtrado
console.log(filtroPrecio(200, 400));
console.log(filtroNombre('producto 2'));