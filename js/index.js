
const header = document.querySelector('.header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

const enlaces = [
    {
        link: "index",
        nombre: "Inicio"
    },
    {
        link: "Frutas",
        nombre: "Frutas"
    },
    {
        link: "Verduras",
        nombre: "Verduras"
    }, 
    {
        link: "Otros",
        nombre: "Otros"
    },  
    {
        link: "Mi Pedido",
        nombre: "Mi Pedido"
    }    
]

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);

navegacion.className = "navbar";
ul.className = "ul";

for (const link of enlaces) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
    ul.appendChild(li);
}



let informacion = document.querySelector('#informacion');
let nombre = document.getElementById('nombre');
let direccion = document.getElementById('direccion');
let telefono = document.getElementById('telefono');
let email = document.getElementById('email');

if (informacion) {
    informacion.addEventListener("submit", (e) => {
        e.preventDefault();

        let datos = e.target;

        const nombreStorage = datos.children[1].value;
        const direccionStorage = datos.children[3].value;
        const telefonoStorage = datos.children[5].value;
        const emailStorage = datos.children[7].value;
    
        localStorage.setItem("nombre", nombreStorage);
        localStorage.setItem("direccion", direccionStorage);
        localStorage.setItem("telefono", telefonoStorage);
        localStorage.setItem("email", emailStorage);

        document.getElementById('nombre').innerHTML = nombreStorage;
        document.getElementById('direccion').innerHTML = direccionStorage;
        document.getElementById('telefono').innerHTML = telefonoStorage;
        document.getElementById('email').innerHTML = emailStorage;
    });
}



