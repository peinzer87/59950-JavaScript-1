
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const email = document.getElementById('email').value;
//     const nombre = document.getElementById('name').value;
//     const password = document.getElementById('password').value;

//     if (email && password) {
//         // Almacenar el nombre en localStorage
//         localStorage.setItem('nombreUsuario', nombre);
        
//         // Mostrar mensaje de bienvenida
//         document.getElementsByClassName('loginMessage')[0].style.color = 'orange';
//         document.getElementsByClassName('loginMessage')[0].innerText = `¡Bienvenido, ${nombre}!`;

//         // Redirigir a la página principal si es necesario
//         window.location.href = 'index.html';
//     } else {
//         document.getElementsByClassName('loginMessage')[0].innerText = 'Por favor, ingrese todos los campos.';
//     }
// });

// Función para cargar el estado de inicio de sesión
function cargarEstadoSesion() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
        const nombre = JSON.parse(usuario).nombre;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('logout-container').style.display = 'block';
        document.getElementById('loginMessage').innerText = `¡Bienvenido, ${nombre}!`;
    }
}

// Evento para el formulario de login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (nombre && email && password) {
        const usuario = { nombre, email };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        cargarEstadoSesion();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Evento para el botón de cerrar sesión
document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('usuario');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logout-container').style.display = 'none';
});

// Cargar estado al cargar la página
document.addEventListener('DOMContentLoaded', cargarEstadoSesion);
