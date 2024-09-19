const header = document.querySelector('.header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

//*Array de enlaces de navegación*/
const enlaces = [
    { link: "index", nombre: "Inicio" },
    { link: "Frutas", nombre: "Frutas" },
    { link: "Verduras", nombre: "Verduras" },
    { link: "Otros", nombre: "Otros" },
    { link: "Mi Pedido", nombre: "Mi Pedido" },
    { link: "Login", nombre: "Login" }
];

//* Agregar elementos al DOM*//
header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);

navegacion.className = "navbar";
ul.className = "ul";

//*Crear los enlaces de navegación*/
for (const link of enlaces) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
}

//*/Crear un espacio para mostrar las iniciales del usuario logueado*/
const liUserInitials = document.createElement('li');
liUserInitials.id = 'nav-iniciales'; // ID para actualizarlo después del login
ul.appendChild(liUserInitials);

//*Agregar contenido vacío para las iniciales del usuario*/
liUserInitials.innerHTML = `<span class="initials"></span>`;

document.addEventListener('DOMContentLoaded', function() {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    
    if (nombreUsuario) {
        // *Obtener las iniciales*/
        const iniciales = nombreUsuario.split(' ').map(p => p[0]).join('');
        
        //*Mostrar las iniciales en la navegación*/
        const navElement = document.getElementById('nav-iniciales');
        if (navElement) {
            navElement.innerText = iniciales;
        }
    }
});