let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
let verdurasCargadas = [];

// *Función para agregar productos al carrito*//
function addToCart(productoID) {
    const product = verdurasCargadas.find(p => p.id === productoID);
    const cantidad = parseInt(document.getElementById(`cantidad-${productoID}`).value) || 1;

    if (product && cantidad > 0) {
        carrito.push({...product, cantidad});
        localStorage.setItem("Cart", JSON.stringify(carrito));

        //* Notifica cuando se agrega producto al carrito!*//
        Toastify({
            text: `${product.nombre} se agregaron correctamente!`,
            duration: 3000
        }).showToast();
    } else {
        console.error("Producto no encontrado o cantidad inválida");
    }
}





// *Función para mostrar productos en la página*//
function mostrarProductos(verduras) {
    const productList = document.getElementById('productListVerduras');
    productList.innerHTML = '';
    verduras.forEach(({id, nombre, precio, imagen}) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';  //*Clase asignada al div*/
        productoDiv.innerHTML = `
            <img src="${imagen}" alt="${nombre}" class="producto-imagen" width="150">
            <p class="producto-nombre">- ${nombre} / / Precio x kilo: $${precio}</p>
            <label for="cantidad-${id}" class="producto-label">Cantidad :</label>
            <input type="number" id="cantidad-${id}" value="1" min="1" max="100" class="producto-cantidad">
            <button class="producto-boton" onclick="addToCart(${id})">Agregar al Carrito</button>`;
        productList.appendChild(productoDiv);
    });
}

//*Función para buscar productos*/
function buscarProducto() {
    const terminoBusqueda = document.getElementById('buscadorVerduras').value.toLowerCase();
    const productosFiltrados = verdurasCargadas.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );
    mostrarProductos(productosFiltrados);
}

//** Función para cargar las verduras desde un archivo json**/
async function cargarVerduras() {
    try {
        const respuesta = await fetch("./verduras.json"); 
        verdurasCargadas = await respuesta.json();
        mostrarProductos(verdurasCargadas);
    } catch (error) {
        console.error("Error al cargar el archivo JSON", error);
    }
}

//*Evento cuando el DOM esté cargado*//
document.addEventListener("DOMContentLoaded", () => {
    cargarVerduras();

    //*Agrega el evento input para búsqueda en tiempo real*/
    const buscadorVerduras = document.getElementById('buscadorVerduras');
    buscadorVerduras.addEventListener('input', buscarProducto);
});


