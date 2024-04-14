const loginForm = document.getElementById("login-form");
const mensajeError = document.getElementById("mensaje-error");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Lucia" && password === "12345678") {
        
        alert("Bienvenido!");
       
    } else {
       
        mensajeError.innerText = "Nombre de usuario o contraseña incorrectos";
    }
});

// let edad = prompt("Ingrese su edad");

// Validación de la edad
// if (edad >= 18) {
//     const persona = {
//         nombre: prompt("Por favor, ingrese su nombre"),
//         localidad: prdocument.addEventListener("DOMContentLoaded", function() {
  
// });ompt("Por favor, ingrese su localidad"),

//         verInfo: function() {
//             console.log("Nombre: " + this.nombre, + " " + "Localidad: " + this.localidad);
//         }
//     };

//     alert("¡Bienvenido!");
//     persona.verInfo(); 
// } else {
//     do {
//         alert("Usted no posee permisos para ingresar");
//         console.log("Menor de edad");
//         edad = prompt("Ingrese su edad"); // Solicita nuevamente la edad hasta que sea mayor o igual a 18
//     } while (edad < 18)
// }

// let ingresoMensual = Number(prompt("Por favor, indique su ingreso mensual neto"));
// if (ingresoMensual >= 450000) {
//     alert("Usted tiene una cuenta Platinum!");
//     console.log("Usuario válido PLATINUM");
// } else if (ingresoMensual >= 300000) {
//     alert("Usted tiene una cuenta Gold!");
//     console.log("Usuario válido Gold");
// } else {
//     alert("Usted posee una cuenta básica");
//     console.log("Usuario válido BÁSICO");
// }

//array 1
const beneficiosGold = ["tarjeta de credito VISA" , "tarjeta de credito Mastercard" , "Prestamo"]
const beneficiosPlatinum = ["Beneficios GOLD" , "Cobertura Internacional" , "Limite flexible"]
const beneficiosBlack = beneficiosGold.concat(beneficiosPlatinum)
// console.log(beneficiosBlack);

//map

const tipoDeCuentaCredito = [

    {nombre: "Basico", limite:200000},
    {nombre: "Gold", limite: 300000},
    {nombre: "Platinum", limite: 450000},
    {nombre: "Black", limite: 600000 }
]
 const nombres = tipoDeCuentaCredito.map((el) => el.nombre)
 console.log(nombres)

