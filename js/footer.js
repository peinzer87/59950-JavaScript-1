const footer = document.getElementById("footer");
const parrafoFooter = document.createElement('p');
const parrafoFooter2 = document.createElement('p');
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = anioActual +" Fruta Fresca S.A.  "  + " Todos los derechos reservados";
parrafoFooter2.innerHTML = "Phone: +56955888";

footer.appendChild(parrafoFooter)
footer.appendChild(parrafoFooter2)
