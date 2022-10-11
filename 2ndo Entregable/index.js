//   Variables
let cotizacion
let precioSeguro = 1.09
let nuevoAuto = []
let marca, subMarca, precio, carga

// constantes

// Declaracion de automoviles
class Automovil {
    constructor(id, marca, submarca, precio, carga) {
        this.id = id;
        this.marca = marca;
        this.submarca = submarca;
        this.precio = precio;
        this.carga = carga;
        };
    seguro(){
        let agregarSeguro = prompt("Deseas contratar seguro para tu Automovil? si/no").toLowerCase();
        while(agregarSeguro != "si" && agregarSeguro != "no"){
            alert("Porfavor selecionar si o no.");
            agregarSeguro = prompt("Deseas contratar seguro para tu Automovil? si/no").toLowerCase();
        }if(agregarSeguro === "si"){
            alert("El precio del" + " " + this.marca + " "+ this.submarca + " " + "es de \n" + "$"+(this.precio * precioSeguro))
        }else{
            alert("El precio del" + " " + this.marca + " "+ this.submarca + " " + "es de \n" + "$"+(this.precio))
        }
    }
}

// Productos disponibles
const automovil1 = new Automovil(01, "Mercedes", "Amg", 1200000, false);
const automovil2 = new Automovil(02, "Volkswagen", "Jetta", 450000, false);
const automovil3 = new Automovil(03, "Toyota", "Pickup", 900000, true);
const automovil4 = new Automovil(04, "Ford", "Pickup", 1000000, true);
const automovil5 = new Automovil(05, "Kia", "Sorento", 500000, false);
const automoviles = [automovil1, automovil2, automovil3, automovil4, automovil5];

//Funciones de comprobraciones al agregar un nuevo Automovil
function validarMarca(){
    marca = prompt("Cual es la marca del automovil a agregar?").toLowerCase();
    while(typeof marca != "string"){
        alert("No se permite numeros en esta seccion");
        marca = prompt("Cual es la marca del automovil a agregar?").toLowerCase();
    }
}
function validarSubMarca(){
    subMarca = prompt("Cual es la submarca del automovil a agregar?").toLowerCase();
    while(typeof subMarca != "string"){
        alert("No se permite numeros en esta seccion");
        subMarca = prompt("Cual es la marca del automovil a agregar?").toLowerCase();
    }
}
function validarPrecio(){
    precio = parseInt(prompt("Cual es el valor del automovil a agregar?"));
    while(Number.isNaN(precio)){
        alert("Porfavor de agregar el valor correspondiente");
        precio = parseInt(prompt("Cual es el valor del automovil a agregar?"));
    }
}
// function validarCarga(){
//     carga = prompt("Cual es la submarca del automovil a agregar?").toLowerCase();
//     while(Number.isNaN(carga)){
//         alert("Porfavor de agregar el valor correspondiente");
//         carga = prompt("Cual es la submarca del automovil a agregar?").toLowerCase();
//     }
// }

// Funcion de operaciones para el cotizador
function valorConSeguro(){
    if(cotizacion == 1){
        automovil1.seguro();
    }else if(cotizacion == 2){
        automovil2.seguro();
    }else if(cotizacion == 3){
        automovil2.seguro();
    }else if(cotizacion == 4){
        automovil2.seguro();
    }else if(cotizacion == 5){
        automovil2.seguro();
    }else{
        alert("hola")
    }
}

// Funcion para agregar nuevo Automovil

function agregarAutomovil(nuevoAuto){
    if(cotizacion == 6){
       validarMarca();
       validarSubMarca();
       validarPrecio();
    }
    let automovilNuevo = new Automovil("",marca,subMarca,precio,"");
    automoviles.push(automovilNuevo);
    alert("Gracias por agregar el automovil\n" + nombre +" " + subMarca + "Con el valor de" + " " + precio);
    alert("Agregaste un nuevo carro llamado" + " " + automoviles.find(automovilNuevo.marca6));
} 


// Funcion para cotizar automovil
function carroCotizado(){
    do{
        cotizacion = parseInt(prompt("Cuales de nuestros autos disponiles deseas cotizar:\n1)Mercedes AMG $1,200,000.00\n2)Volkswagen Jetta $450,000.00\n3)Toyota Pickup $900,000.00\n4)Ford Pickup $1,000.00\n5)Kia Sorento $500,000.00\n6)Agregar un automovil\n7)Salir"));
        while(cotizacion != 1 && cotizacion != 2 && cotizacion != 3 && cotizacion != 4 && cotizacion != 5 && cotizacion != 6 && cotizacion !=7) {
            alert("El proporcionado no es valido, porfavor seleciona el NUMERO correspondiente");
            cotizacion = parseInt(prompt("Cuales de nuestros autos disponiles deseas cotizar:\n1)Mercedes AMG $1,200,000.00\n2)Volkswagen Jetta $450,000.00\n3)Toyota Pickup $900,000.00\n4)Ford Pickup $1,000.00\n5)Kia Sorento $500,000.00\n6)Agregar un automovil\n7)Salir"));
            
        }if(cotizacion == 1){
            valorConSeguro();
        }if(cotizacion == 2){
            valorConSeguro();
        }if(cotizacion == 3){
            valorConSeguro();
        }if(cotizacion == 4){
            valorConSeguro();
        }if(cotizacion == 5){
            valorConSeguro();
        }if(cotizacion == 6){
            agregarAutomovil();
        }
    } while(cotizacion !== 7){
        alert("Gracias por su interes");
    }
}

carroCotizado();