
const Frutas = [
    {id: 1, nombre: "Bananas", precio: 150, stock: 100},
    {id: 2, nombre: "Manzanas", precio: 91, stock: 100},
    {id: 3, nombre: "Peras", precio: 102, stock: 100},
    {id: 4, nombre: "Mandarinas", precio: 54, stock: 100},
    {id: 5, nombre: "Uvas", precio: 98, stock: 100},
    {id: 6, nombre: "Durazno", precio: 125, stock: 100},
]

let carrito = JSON.parse(localStorage.getItem("Cart")) || [];

function addToCart(productoID) {
    const product = Frutas.find(p => p.id === productoID);
    if (product) {
        carrito.push({...product});
        localStorage.setItem("Cart", JSON.stringify(carrito));
    }
}

function mostrarProductos() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    Frutas.forEach(({id, nombre, precio}) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = ` 
            <p>Nombre: ${nombre} - Precio: $${precio}</p>
            <button onclick="addToCart(${id})"> Agregar al Carrito </button>
        `;
        productList.appendChild(productoDiv);
    });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);



