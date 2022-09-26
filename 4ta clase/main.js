// fuction nombreUtil( parametros opcional ){ codigo }

function mostrarNombre(){
    let nombre = prompt("¿Cual es tu nombre?");
    alert(`Tu nombre es ${nombre}`);
}

// variables

// condicionales

// otras funciones

// mostrarNombre();

function aprobarNota() {
    let nota = parseInt(prompt("Cual fue tu nota?"));
    if (nota > 5){
        alert("Aprobaste");
    } else{
        alert("Reprobaste");
    }
}

// aprobarNota();

function suma(num1, num2) {
    // console.log(num1 + num2);
    let resultado = num1 + num2;
    return resultado; // cada funcion debe de tener un return ya que el valor se perdera si no esta resguardado o indefinido
}

// No importa el nombre que le des al parametro, siempre se le asiganara el valor segun su posicion.
// suma(6, 9);
// let numero1 = parseFloat(prompt("Agrega tu numero"))
// let numero2 = parseFloat(prompt("Agrega tu numero"))
// suma(numero1, numero2);
// let edad = parseInt(prompt("Agrega tu edad"))
// suma(edad, numero1);

// Esriban una funcion que acepte un numero y les diga si es un numero primo o no
// un numero primo, es un numero que se divide solo por si mismo y por 1
// 1 - no es primo

function numeroPrimo() {
    let numPedido = parseInt(prompt("Agrega un numero"))
    for (let i = 2; i < numPedido/2; i++)
        if (numPedido % i == 0) {
            alert(`Tu numero ${numPedido} no es Primo`)
        }
    return numPedido;
}
