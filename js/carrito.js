document.addEventListener("DOMContentLoaded", function () {
    //*Función para cargar y mostrar el carrito*//
    function cargarCarrito() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalContainer = document.getElementById('totalCarrito');
        const realizarCompraBtn = document.getElementById('realizarCompra');
        cartItemsContainer.innerHTML = '';
        totalContainer.innerHTML = '';

        let carrito = JSON.parse(localStorage.getItem("Cart")) || [];

        if (carrito.length === 0) {
            cartItemsContainer.innerHTML = '<p>El carrito está vacío</p>';
            realizarCompraBtn.style.display = 'none'; 
        } else {
            let total = 0;
            realizarCompraBtn.style.display = 'block'; 

            const productosAgrupados = carrito.reduce((acc, producto) => {
                const existente = acc.find(p => p.id === producto.id);
                if (existente) {
                    existente.cantidad += producto.cantidad;
                } else {
                    acc.push({ ...producto });
                }
                return acc;
            }, []);

            productosAgrupados.forEach((producto, index) => {
                const productoDiv = document.createElement('div');
                productoDiv.innerHTML = `
                    <p>Producto: ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}</p>
                    <button class="eliminar-producto" data-index="${index}">Eliminar</button>
                `;
                cartItemsContainer.appendChild(productoDiv);

                total += producto.precio * producto.cantidad;
            });

            totalContainer.innerHTML = `<p>Total: $${total}</p>`;

            const botonesEliminar = document.querySelectorAll('.eliminar-producto');
            botonesEliminar.forEach(boton => {
                boton.addEventListener('click', function () {
                    const index = this.getAttribute('data-index');
                    eliminarProducto(index);
                });
            });
        }
    }

    function eliminarProducto(index) {
        let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
        carrito.splice(index, 1);  
        localStorage.setItem("Cart", JSON.stringify(carrito));  
        cargarCarrito();  
    }

    // Función para capturar y guardar información del cliente
    let informacion = document.querySelector('#informacion');
    if (informacion) {
        informacion.addEventListener("submit", (e) => {
            e.preventDefault();
            
            Swal.fire({
                title: "Confirmar datos",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#47cc32",
                cancelButtonColor: "#473838",
                confirmButtonText: "Si, confirmar"
            })
            const cliente = {
                nombre: document.getElementById('nombre').value,
                direccion: document.getElementById('direccion').value,
                telefono: document.getElementById('telefono').value,
                email: document.getElementById('email').value
            };
            
            //*Guardar los datos en localStorage*/
            localStorage.setItem("Cliente", JSON.stringify(cliente));
            

            //*Mostrar los datos en el DOM*/
            document.getElementById('nombre').innerHTML = cliente.nombre;
            document.getElementById('direccion').innerHTML = cliente.direccion;
            document.getElementById('telefono').innerHTML = cliente.telefono;
            document.getElementById('email').innerHTML = cliente.email;
        });
        
    }

    //*Función para realizar la compra ( yvacía el carrito y los datos del cliente)*//
    function realizarCompra() {
        let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
        let cliente = JSON.parse(localStorage.getItem("Cliente"));

        if (!cliente) {
            alert("Por favor, complete sus datos antes de realizar la compra.");
            return;
        }

        if (carrito.length > 0) {
            Swal.fire({
                title: "Confirmar Pedido",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#47cc32",
                cancelButtonColor: "#473838",
                confirmButtonText: "Si, Comprar!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Compra Realizada!",
                        text: "Tu pedido llegará pronto",
                        icon: "success"
                    });

                    //* Limpiael carrito y cliente del localStorage*/
                    localStorage.removeItem("Cart");
                    localStorage.removeItem("Cliente");

                    //*Refrescar la vista del carrito*/
                    cargarCarrito();
                }
            });
        } else {
            alert('El carrito está vacío.');
        }
    }

    //*Cargar carrito y configurar el botón de realizar compra*/
    cargarCarrito();
    const realizarCompraBtn = document.getElementById('realizarCompra');
    realizarCompraBtn.addEventListener('click', realizarCompra);
});
