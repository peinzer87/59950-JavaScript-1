document.addEventListener("DOMContentLoaded", function () {
    // Función para cargar y mostrar el carrito
    function cargarCarrito() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalContainer = document.getElementById('totalCarrito');
        const realizarCompraBtn = document.getElementById('realizarCompra');
        cartItemsContainer.innerHTML = '';
        totalContainer.innerHTML = '';

        let carrito = JSON.parse(localStorage.getItem("Cart")) || [];

        if (carrito.length === 0) {
            cartItemsContainer.innerHTML = '<p>El carrito está vacío</p>';
            realizarCompraBtn.style.display = 'none';  //*Oculta el botón de compra si no hay productos*--//
        } else {
            let total = 0;
            realizarCompraBtn.style.display = 'block';  //*Mostrar el botón de compra si hay productos**/

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

                //*Calcular el total del carrito**/
                total += producto.precio * producto.cantidad;
            });

            //*Mostrar el total del carrito*///
            totalContainer.innerHTML = `<p>Total: $${total}</p>`;

            //*Agregar evento a los botones de eliminar**/
            const botonesEliminar = document.querySelectorAll('.eliminar-producto');
            botonesEliminar.forEach(boton => {
                boton.addEventListener('click', function () {
                    const index = this.getAttribute('data-index');
                    eliminarProducto(index);
                });
            });
        }
    }

    //*Función para eliminar productos del carrito*//
    function eliminarProducto(index) {
        let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
        carrito.splice(index, 1);  // *limina el producto del carrito**/
        localStorage.setItem("Cart", JSON.stringify(carrito));  //Actualizar localStorage*//
        cargarCarrito();  // Refrescar la vista del carrito
    }

    ///Función para realizar la compra (vacía el carrito)**/
    function realizarCompra() {
        let carrito = JSON.parse(localStorage.getItem("Cart")) || [];
        if (carrito.length > 0) {
            Swal.fire({
                title: "Confirmar Pedido",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#47cc32",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, Comprar!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Compra Realizada!",
                        text: "Tu pedido llegara pronto",
                        icon: "success"
                    });
                }
            });
            localStorage.removeItem("Cart");  //*Vacia el carrito en localStorage*/
            cargarCarrito();  /* Refrescar la vista del carrito*/
        } else {
            alert('El carrito está vacío.');
        }

    }

    // Capturar y guardar información del cliente**/
    let informacion = document.querySelector('#informacion');
    if (informacion) {
        informacion.addEventListener("submit", (e) => {
            e.preventDefault();

            let datos = e.target;

            const cliente = {
                nombre: datos.children[1].value,
                direccion: datos.children[3].value,
                telefono: datos.children[5].value,
                email: datos.children[7].value
            };

            localStorage.setItem("Cliente", JSON.stringify(cliente));

            //Mostrar datos en el DOM**/
            document.getElementById('nombre').innerHTML = cliente.nombre;
            document.getElementById('direccion').innerHTML = cliente.direccion;
            document.getElementById('telefono').innerHTML = cliente.telefono;
            document.getElementById('email').innerHTML = cliente.email;
        });
    }

    //Cargar carrito y configurar el botón de realizar compra***//
    cargarCarrito();
    const realizarCompraBtn = document.getElementById('realizarCompra');
    realizarCompraBtn.addEventListener('click', realizarCompra);

});
