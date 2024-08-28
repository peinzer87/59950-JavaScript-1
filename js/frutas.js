
const Frutas = [
    {id: 1, nombre: "Bananas", precio: 150, stock: 100, imagen: "Assets/FRUTAAAA2024-08-27 224137.png"},
    {id: 2, nombre: "Manzanas", precio: 91, stock: 100, imagen: "Assets/FRUTAAAA2024-08-27 224137.png" },
    {id: 3, nombre: "Peras", precio: 102, stock: 100, imagen: "Assets/FRUTAAAA2024-08-27 224137.png"},
    {id: 4, nombre: "Mandarinas", precio: 54, stock: 100, imagen: "Assets/FRUTAAAA2024-08-27 224137.png"},
    {id: 5, nombre: "Uvas", precio: 98, stock: 100, imagen: "Assets/FRUTAAAA2024-08-27 224137.png"},
    {id: 6, nombre: "Durazno", precio: 125, stock: 100, imagen: "Assets/FRUTAAAA2024-08-27 224137.png"},
]

let carrito = JSON.parse(localStorage.getItem("Cart")) || [];

function addToCart(productoID) {
    const product = Frutas.find(p => p.id === productoID);
    const cantidad = parseInt(document.getElementById(`cantidad-${productoID}`).value) || 1;

    if (product && cantidad > 0) {
        carrito.push({...product, cantidad});
        localStorage.setItem("Cart", JSON.stringify(carrito));
    }
}

function mostrarProductos() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    Frutas.forEach(({id, nombre, precio, imagen}) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = ` 
            <img src="${imagen}" alt="${nombre}" width="150">
            <p>-   ${nombre} / /    Precio x kilo: $${precio}</p>
            <label for="cantidad-${id}">Cantidad (unidades):</label>
            <input type="number" id="cantidad-${id}" value="1" min="1" max="100">
            <button onclick="addToCart(${id})">Agregar al Carrito</button>`;
        productList.appendChild(productoDiv);
    });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);



