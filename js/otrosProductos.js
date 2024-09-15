let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
let otrosProductos = [];  //*Inicializa la lista de productos**/

// Función para agregar productos al carrito*//
function addToCart(productoID) {
    const product = otrosProductos.find(p => p.id === productoID);
    const cantidad = parseInt(document.getElementById(`cantidad-${productoID}`).value) || 1;

    if (product && cantidad > 0) {
        carrito.push({ ...product, cantidad });
        localStorage.setItem("Cart", JSON.stringify(carrito));
    }

    Toastify({
        text: `${product.nombre} se agregaron correctamente!`,
        duration: 3000
    }).showToast();
}

// Función para mostrar productos en el Dom**//
function mostrarProductos(productos) {
    const productList = document.getElementById('productListOtros');
    productList.innerHTML = '';
    productos.forEach(({ id, nombre, precio, imagen }) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';  // Clase asignada al div*//
        productoDiv.innerHTML = `
            <img src="${imagen}" alt="${nombre}" class="producto-imagen" width="150">
            <p class="producto-nombre">- ${nombre} / / Precio: $${precio}</p>
            <label for="cantidad-${id}" class="producto-label">Cantidad :</label>
            <input type="number" id="cantidad-${id}" value="1" min="1" max="100" class="producto-cantidad">
            <button class="producto-boton" onclick="addToCart(${id})">Agregar al Carrito</button>`;
        productList.appendChild(productoDiv);
    });
}

// Función para buscar productos*//
function buscarProducto() {
    const terminoBusqueda = document.getElementById('buscador').value.toLowerCase();
    const productosFiltrados = otrosProductos.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );
    mostrarProductos(productosFiltrados);
}

//Función para cargar el archivo JSON*//
function cargarOtrosProductos() {
    fetch("./otrosP.json")
        .then(response => response.json())
        .then(data => {
            otrosProductos = data;  //guarda los productos en la variable*/
            mostrarProductos(otrosProductos);  //*muestra los productos en la página*//
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarOtrosProductos();  ///*Cargar productos desde el archivo JSON*/

    /*Agrega el evento input para búsqueda en tiempo real*///
    const buscador = document.getElementById('buscador');
    buscador.addEventListener('input', buscarProducto);
});
