// let persona1 = {
//     nombre: "Axel", 
//     edad: 28, 
//     sexo: "Masculino"
// }

// function Mascota(nombre, tipo, edad, dueno, castrado, genero){
//     this.nombre = nombre;
//     this.tipo = tipo;
//     this. edad = edad;
//     this.dueno = dueno;
//     this.castrado = castrado;
//     this.genero = genero;
//     this.puntos = 100;
//     this.agregarPuntos = (agregarPuntos) =>{
//         this.puntos += agregarPuntos;
//     }
// }

class Mascota {
    constructor(nombre, tipo, edad, dueno, castrado, genero) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.dueno = dueno;
        this.castrado = castrado;
        this.genero = genero;
        this.puntos = 100;
        };
        agregarPuntos(agregarPuntos){
            this.puntos += agregarPuntos;
    }
}

const appa = new Mascota("Appa", "Aussie", 4, "Axel", "no","Masculino")

const crearMascota = ()=> {
    let nombreMascota = prompt("Como se llama la mascota?");
    let tipoMascota = prompt("Que tipo de mascota es?");
    let edadMascota = parseInt(prompt("Que edad tiene?"));
    let duenioMascota = prompt("Como te llamas?");
    let castradoMascota = prompt("esta castrado? pon si o no");
    let generoMascota = prompt("Que genero es?");

    let castradoBoolean = (castradoMascota == 'si');
    const mascota = new Mascota(nombreMascota,tipoMascota,edadMascota,duenioMascota,castradoBoolean,generoMascota);
    console.log(mascota);
    return mascota;
}

crearMascota();

/*
1 - crear una clase con un constructor de productos, que acepte: nombre, categoria, precio y stock
2 - crear un metodo que aplique el 10% de descuento si el precio es mayor a 1000
3 - crear un metodo que se llame comprar y que acepte como parametro la cantidad
este metodo va a revisar si hay suficiente stock para comprar y si lo hay modifica modifica el stock.

*/
