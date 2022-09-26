//if() {}
//ciclo por conteo
//for (desde; hasta; variacion) { codigo }

//10/2 = 5  sin resto ----    10%2 = 0
//10/3 = 3 y resta 1 -----    10%3 = 1

//break - corta el ciclo
// continue - saltear esa iteracion

// let veces = parseInt(prompt("Cuantas veces iteramos?"));

// for(let i = 1; i <= veces; i++ ) {

//     if(i % 2 == 0) {
//         console.log(`El numero ${i} es par`);

//     } else {

//         continue;
//     }
// }

// while(condicion){ codigo } SE PUEDE EJECUTAR 0 O MAS VECES

// let dato = prompt("Dame un dato. Ingresa 'salir' para salir");

// while(dato != "salir") {
//     alert(`el dato que me diste es ${dato}`);
//     dato = prompt("Dame un dato. Ingresa 'salir' para salir");
// }

//do... while // SE EJECUTA POR LO MENOS UNA SOLA VEZ

// do {

//     alert(`el dato que me diste es ${dato}`);
//     dato = prompt("Dame un dato. Ingresa 'salir' para salir");

// } while(dato != "salir")

// VALIDACION DE CONTRASENIA

// let pass = 1234;

// let dato = parseInt(prompt("Cual es la contrasenia"));

// let intentos = 3;

// while((dato != pass) && (intentos > 0)) {
//     intentos--;
//     alert(`Clave equivocada. Te quedan ${intentos} intentos`);
//     if(intentos == 0) {
//         break;
//     }
//     dato = parseInt(prompt("Cual es la contrasenia"));
// }

/*switch(variable) {
    case valor:
        codigo
        break
    default:
        codigo
        break;
}

*/
// let animal = prompt("que animal te gusta?");

// switch (animal) {
//     case "gato":
//         alert("el gato hace miau");
//         break;
//     case "perro":
//         alert("el perro hace guau");
//         break;
//     case "vaca":
//         alert("la vaca hace muu");
//         break;
//     default:
//         alert("no se como hace ese animal")
//         break;
// }

let num1 = parseInt(prompt("el primer numero"));
let num2 = parseInt(prompt("el segundo numero"));
let operacion = prompt("que operacion queres hacer? +, -, x, /")

switch(operacion) {
    case "+":
        alert(`el resultado es ${num1 + num2}`);
        break;
    case "-":
        if(num1 < num2 ) {
            alert("es un numero negativo")
        }
        alert(`el resultado es ${num1 - num2}`);
        break;
    case "x":
        alert(`el resultado es ${num1 * num2}`);
        break;
    case "/":
        if(num2 == 0) {
            alert("No se puede dividir un numero por cero!")
            break;
        } else {
            alert(`el resultado es ${num1 / num2}`);
        }
        break;
    default:
        alert("Esa no es una operacion valida");
        break;
}

//toLowerCase(), toUpperCase(), trim(), length, replace() 