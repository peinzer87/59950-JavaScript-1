

//* AGREGA AL CARRITO*//

let carrito = JSON.parse(localStorage.getItem("Cart")) || [];

function addToCart(productoID) {
    //*Se busaca el producto en la lista de productos cargados*//
    const product = frutasCargadas.find(p => p.id === productoID);
    const cantidad = parseInt(document.getElementById(`cantidad-${productoID}`).value) || 1;

    if (product && cantidad > 0) {
        //* Agregamos el producto y la cantidad al carrito/*/
        carrito.push({ ...product, cantidad });
        //*Se guarda el carrito en el localStorage!! */
        localStorage.setItem("Cart", JSON.stringify(carrito));



        //* Notifica cuando agregamos un producto al carrito*///
        Toastify({
            text: `${product.nombre} se agregaron correctamente!`,
            duration: 3000
        }).showToast();
    } else {
        console.error("Producto no encontrado o cantidad inválida");
    }
}



function mostrarProductos(frutas) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiamos el contenedor de productos//

    frutas.forEach(({ id, nombre, precio, imagen }) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';  // Clase asignada al div*//
        productoDiv.innerHTML = `
            <img src="${imagen}" alt="${nombre}" class="producto-imagen" width="150">
            <p class="producto-nombre">- ${nombre} / / Precio x kilo: $${precio}</p>
            <label for="cantidad-${id}" class="producto-label">Cantidad :</label>
            <input type="number" id="cantidad-${id}" value="1" min="1" max="100" class="producto-cantidad">
            <button class="producto-boton" onclick="addToCart(${id})">Agregar al Carrito</button>
        `;
        productList.appendChild(productoDiv);
    });
}

function buscarProducto() {
    const terminoBusqueda = document.getElementById('buscadorFruta').value.toLowerCase();
    const productosFiltrados = frutasCargadas.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );
    mostrarProductos(productosFiltrados); // Muestra los productos filtrados*//
}

let frutasCargadas = []; // Variable global para almacenar los productos una vez cargados*//

const peticionFruta = async () => {
    try {
        const respuesta = await fetch("./frutas.json"); 
        const datos = await respuesta.json();

        frutasCargadas = datos; // Guardamos los productos en la variable global*//

        mostrarProductos(frutasCargadas); // Mostramos todos los productos inicialmente*/
    } catch (error) {
        console.error("Error al cargar el JSON de frutas:", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    peticionFruta(); // Llamamos a la función para cargar los productos*//

    // Agrega el evento input para búsqueda en tiempo real*//
    const buscadorFruta = document.getElementById('buscadorFruta');
    buscadorFruta.addEventListener('input', buscarProducto);
});
