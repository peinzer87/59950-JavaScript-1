// const verduras = [
//     {id: 1, nombre: "Zanahorias", precio: 150, stock: 100},
//     {id: 2, nombre: "Papas", precio: 91, stock: 100},
//     {id: 3, nombre: "Lechugas", precio: 102, stock: 100},
//     {id: 4, nombre: "Tomates", precio: 54, stock: 100},
//     {id: 5, nombre: "Cebollas", precio: 98, stock: 100},
//     {id: 6, nombre: "boñato", precio: 125, stock: 100},
// ]
// let carrito = [];


// function addToCart (productoID){
//     localStorage.setItem (`carrito ${productoID}`, productoID);
//     const product = verduras.find(p => p.id === productoID)
    
//     carrito.push({
//         id: product.id,
//         Nombre: product.nombre,
//         precio: product.precio
//     });

//     localStorage.setItem("Cart", JSON.stringify(carrito));
// }

// document.addEventListener("DOMContentLoaded", function () {
// function mostrarProductos() {
//     const productList = document.getElementById('productListVerduras');
//     productListVerduras.innerHTML = '';
//     verduras.forEach(producto => {
//         const productoDiv = document.createElement('div');
//         productoDiv.innerHTML = ` 
//                 <p>Nombre: ${producto.nombre} - Precio: $${producto.precio}</p>
//                 <button onclick="addToCart(${producto.id})"> Agregar al Carrito </button>
//             `
//             productListVerduras.appendChild(productoDiv);
//     })
// }
//     mostrarProductos();
// })


///////////////////////

const verduras = [
    {id: 1, nombre: "Zanahorias", precio: 150, stock: 100},
    {id: 2, nombre: "Papas", precio: 91, stock: 100},
    {id: 3, nombre: "Lechugas", precio: 102, stock: 100},
    {id: 4, nombre: "Tomates", precio: 54, stock: 100},
    {id: 5, nombre: "Cebollas", precio: 98, stock: 100},
    {id: 6, nombre: "Boñato", precio: 125, stock: 100},
];

let carrito = JSON.parse(localStorage.getItem("Cart")) || [];

function addToCart(productoID) {
    const product = verduras.find(p => p.id === productoID);
    if (product) {
        carrito.push({...product});
        localStorage.setItem("Cart", JSON.stringify(carrito));
    }
}

function mostrarProductos() {
    const productList = document.getElementById('productListVerduras');
    productList.innerHTML = '';
    verduras.forEach(({id, nombre, precio}) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = ` 
            <p>Nombre: ${nombre} - Precio: $${precio}</p>
            <button onclick="addToCart(${id})"> Agregar al Carrito </button>
        `;
        productList.appendChild(productoDiv);
    });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
