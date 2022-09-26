// let edad = parseInt(prompt("Que edad tienes?"))

// if(edad >= 0  && edad <=17){
//     alert("Eres un niño");
// } else if(edad >= 18 && edad <=40){
//     alert("Sos un joven")
// } else if(edad > 41){
//     alert("Trajiste tu baston")
// } else if(edad == NaN){
//     alert("Solo Numericos")
// }else{
//     alert("Solo numeros positivos")
// }

// operador ternario, se utiliza para un if sencillo (es decir si es verdadero o falso)
//si tiene 18 de edad decir "Eres mayor de edad" de lo contrario decir "Eres un bebote"
// let edad = +prompt("Que edad tienes?")

// edad >= 18 ? alert("Eres mayor de edad") : alert("Eres un bebote")

// Si es numero impar Decir "Numero impar" y si es par "Numero Par"
// let num = parseInt(prompt("Agrega un numero"))

// num % 2 == 0 ? alert(`Numero Par: ${num}`) : alert(`Numero Impar: ${num}`)

//Pedir los tres lados de un triangulo
//tres tipos de triangulos
// equilatero = todos los lados iguales
// isoceles  = dos lados iguales y 1 diferente
// escaleno = lso tres lados diferentes

// Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
// let num = parseInt(prompt("Ingrese un valor"))

// if(num > 1000){
//     alert(`Tu numero ${num} es mayor a 1000`)
// }else{
//     alert(`Tu numero ${num} es menor a 1000`)
// }

// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

// let saludar = prompt("Agregar un saludo")

// if(saludar === "Hola"){
//     console.log(saludar)
// }else{
//     console.log("Intenta con un Hola")
// }

// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

// let num = parseInt(prompt("Ingresa un numero"))

// if(num >= 10 && num <= 50){
//     alert(`${num} esta dentro del rango`)
// }else{
//     alert(`${num} esta fuera del rango`)
// }

let lado1, lado2, lado3

alert("Agrega el valor de los lados de tu triangulo")

lado1 = parseInt(prompt("Agrega el primer valor"))
lado2 = parseInt(prompt("Agrega el segundo valor"))
lado3 = parseInt(prompt("Agrega el tercer valor"))

if(lado1 === lado2 && lado2 === lado3){
    alert("Tu triangulo es Equilatero")
} else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    alert("Tu traingulo es Isoceles")
} else{ //(lado1 != lado2 && lado2 != lado3)
    alert("Tu triangulo es Escaleno")
}
