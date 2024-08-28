document.addEventListener("DOMContentLoaded", function () {
    function cargarCarrito() {
        const cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = '';
        
        const carrito = JSON.parse(localStorage.getItem("Cart")) || [];

        if (carrito.length === 0) {
            cartItemsContainer.innerHTML = '<p>El carrito esta vacio</p>';
        } else {
            // Agrupar productos por id para sumar cantidades
            const productosAgrupados = carrito.reduce((acc, producto) => {
                const existente = acc.find(p => p.id === producto.id);
                if (existente) {
                    existente.cantidad += 1;
                } else {
                    acc.push({ ...producto, cantidad: 1 });
                }
                return acc;
            }, []);

            productosAgrupados.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.innerHTML = `
                    <p>Producto: ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}</p>
                `;
                cartItemsContainer.appendChild(productoDiv);
            });
        }
    }

    cargarCarrito();
});
