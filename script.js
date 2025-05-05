let productos = [
    { id: 1, nombre: "Camisa", categoria: "ropa" },
    { id: 2, nombre: "Pantalón", categoria: "ropa" },
    { id: 3, nombre: "Laptop", categoria: "electronica" },
    { id: 4, nombre: "Audífonos", categoria: "electronica" }
  ];
  
  let carrito = 0;
  
  function init() {
    mostrarProductos(productos);
  }
  
  function mostrarProductos(lista) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
  
    lista.forEach(producto => {
      contenedor.innerHTML += `
        <div class="col-md-3">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">Categoría: ${producto.categoria}</p>
              <button class="btn btn-primary" onclick="agregarAlCarrito()">Agregar</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  function filtrarCategoria() {
    const categoria = document.getElementById("categoriaSelect").value;
  
    if (categoria === "todos") {
      mostrarProductos(productos);
    } else {
      const filtrados = productos.filter(p => p.categoria === categoria);
      mostrarProductos(filtrados);
    }
  }
  
  function agregarAlCarrito() {
    carrito++;
    document.getElementById("totalProductos").innerHTML = carrito;
    alert("Producto añadido al carrito");
  }
  