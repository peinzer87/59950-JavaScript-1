const verduras = [
    {id: 1, nombre: "Zanahorias", precio: 150, stock: 100, imagen: "Assets/FERIA2024-08-26 202702.png"},
    {id: 2, nombre: "Papas", precio: 91, stock: 100, imagen: "Assets/FERIA2024-08-26 202702.png"},
    {id: 3, nombre: "Lechugas", precio: 102, stock: 100, imagen: "Assets/FERIA2024-08-26 202702.png"},
    {id: 4, nombre: "Tomates", precio: 54, stock: 100, imagen: "Assets/FERIA2024-08-26 202702.png"},
    {id: 5, nombre: "Cebollas", precio: 98, stock: 100, imagen: "Assets/FERIA2024-08-26 202702.png"},
    {id: 6, nombre: "Boñato", precio: 125, stock: 100, imagen: "Assets/FERIA2024-08-26 202702.png"},
];

let carrito = JSON.parse(localStorage.getItem("Cart")) || [];

function addToCart(productoID) {
    const product = verduras.find(p => p.id === productoID);
    const cantidad = parseInt(document.getElementById(`cantidad-${productoID}`).value) || 1;

    if (product && cantidad > 0) {
        carrito.push({...product, cantidad});
        localStorage.setItem("Cart", JSON.stringify(carrito));
    }
}

function mostrarProductos() {
    const productList = document.getElementById('productListVerduras');
    productList.innerHTML = '';
    verduras.forEach(({id, nombre, precio, imagen}) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <img src="${imagen}" alt="${nombre}" width="150">
            <p>- ${nombre} / / Precio x kilo: $${precio}</p>
            <label for="cantidad-${id}">Cantidad (unidades):</label>
            <input type="number" id="cantidad-${id}" value="1" min="1" max="100">
            <button onclick="addToCart(${id})">Agregar al Carrito</button>`;
        productList.appendChild(productoDiv);
    });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
