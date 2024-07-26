
//////Pagina web de pedidos de comida casera para todos los dias////
/////////4 ejercicios/////////////



//  ///INGTRESO DE DATOS!!
// ///////////////////////

// const Vacio = "";
// const Nombre = prompt("Ingrese su nombre");
// const Apellido = prompt("Ingrese su apellido");
// const Telefono = prompt("Ingrese su número telefónico");
// const Mail = prompt("Ingrese su correo electrónico");
// const Direccion = prompt("Ingrese su dirección");

// if (Nombre === Vacio || Apellido === Vacio || Telefono === Vacio || Mail === Vacio || Direccion === Vacio) {
//     console.warn("Se deben llenar todos los campos");
//     if (Nombre === Vacio) console.error("Falta nombre");
//     if (Apellido === Vacio) console.error("Falta apellido");
//     if (Telefono === Vacio) console.error("Falta número telefónico");
//     if (Mail === Vacio) console.error("Falta correo electrónico");
//     if (Direccion === Vacio) console.error("Falta dirección");
// } else {
//     console.log("Nombre:", Nombre);
//     console.log("Apellido:", Apellido);
//     console.log("Teléfono:", Telefono);
//     console.log("Correo Electrónico:", Mail);
//     console.log("Dirección:", Direccion);
// }





// ///INGRESO DE CANTIDAD DE PACKS////
// //////////////////////////////////

// const VACIO = "";
// const ingreseCantidadPacks = prompt("Ingresa una cantidad de Packs");

// if (ingreseCantidadPacks == VACIO) {
//     console.error("No ha ingresado ninguna cantidad de pack");
// } else if (ingreseCantidadPacks < 0 || ingreseCantidadPacks == 0) {
//     console.error("Debes ingresar al menos 1 pack");
// } else if (ingreseCantidadPacks >= 1 && ingreseCantidadPacks <= 40) {
//     console.log("Ud ha solicitado: " + ingreseCantidadPacks + " packs");
// } else if (ingreseCantidadPacks > 40) {
//     console.warn("Ud se ha excedido en la cantidad de packs habilitada por dia, el límite son 40 packs por pedido, por favor haga un pedido menor.");
// } else {
//     console.error("Por favor, ingrese una cantidad numerica");
// }






// / ///PRECIO POR PORCIÓN CON Y SIN IVA////
// ////////////////////////////////////////

// //    / Calcular el iva
// const calcularIVA = x => x * 0.21;

// //    /Ccalcular el precio final con iva
// const calcularPrecioFinal = (precioBase, cantidad) => {
//     const precioSinIVA = precioBase * cantidad;
//     const precioConIVA = precioSinIVA + calcularIVA(precioSinIVA);
//     return precioConIVA;
// };

// //// Precios de las porciones////
// const preciosPacks = {
//     "diario": 200,
//     "semanal": 1200,
//     "mensual": 4000
// };

// //// Se pide al usuario que ingrese el tipo de pack y la cantidad que va a pedir
// alert ("Aviso: Todos los pedidos constan de 2 comidas diarias por persona")
// const tipoPack = prompt("Ingrese el tipo de entrega (diario, semanal, mensual):").toLowerCase();
// const cantidad = parseInt(prompt("Ingrese la cantidad de Personas:"));

// // Validar que el tipo de pack sea válido
// if (!(tipoPack in preciosPacks)) {
//     console.error("Tipo de entrega no válido. Por favor, ingrese 'diario', 'semanal' o 'mensual'.");
// } else if (isNaN(cantidad) || cantidad <= 0) {
//     console.error("Por favor, ingrese una cantidad válida de Personas.");

// ////Cuando es correcto se muestra lo siguiente...
// } else {

//     //// Obtener el precio base del pack seleccionado
//     const precioBase = preciosPacks[tipoPack];

//     //// Aca calculo el precio final
//     const precioFinal = calcularPrecioFinal(precioBase, cantidad);

//     //// El resultado que se va a mostrar en la consola
//     console.log("Ud ha solicitado entrega " + tipoPack + " para " + cantidad + " Personas" );
//     console.log("Detalles del pedido:")
//     console.log(`Tipo de entrega: ${tipoPack.charAt(0).toUpperCase() + tipoPack.slice(1)}`);
//     console.log(`Cantidad: ${cantidad}`);
//     console.log(`Precio por Persona (sin IVA): $${precioBase}`);
//     console.log(`Precio Total (sin IVA): $${(precioBase * cantidad).toFixed(2)}`);
//     console.log(`IVA: $${calcularIVA(precioBase * cantidad).toFixed(2)}`);
//     console.log(`Precio Final (con IVA): $${precioFinal.toFixed(2)}`);
// }






//      //// FUNCION PARA REALIZAR UN PEDIDO DE UN PLATO////////
//////////////////////////////////////////////////////////////

// function realizarPedido() {
//     const platosDisponibles = ["guiso de lentejas", "milanesas con guarnicion", "risotto", "chop suey de pollo"];
//     const plato = prompt("Ingrese el plato (guiso de lentejas, milanesas con guarnicion, risotto, chop suey de pollo):").toLowerCase();
//     const cantidad = parseInt(prompt("Ingrese la cantidad de porciones:"));

//     // Se validan los datos ingresados///////
//     if (!platosDisponibles.includes(plato)) {
//         console.error("Plato no válido. Por favor, ingrese 'guiso de lentejas', 'milanesas con guarnicion', 'risotto' o 'chop suey de pollo'.");
//     } else if (isNaN(cantidad) || cantidad <= 0) {
//         console.error("Por favor, ingrese una cantidad válida.");
//     } else {
//     // Se muestra el resumen del pedido/////
//         console.log("Resumen del Pedido:");
//         console.log("Plato: "  + plato);
//         console.log("Porciones: " + cantidad);
//     }
// }
// ////////// Llama a la función//////////////
//     realizarPedido();
