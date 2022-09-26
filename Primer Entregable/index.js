   let num1
   let num2 = 5
   let respuesta = "si"
   
   const resultado = []
   const jugar = () =>{
        do{
            num1 = parseFloat(prompt("10 + ____ = 15"))
            if(isNaN(num1)){
                alert("Escribe un Numero")
            }
            if(num1 !== num2){
                alert("Sigue intentando")
            }
            respuesta = prompt("Deseas saber el resultado si / no")
            if (respuesta !== "si" && respuesta !== "no"){
                alert("Colocar si / no")
            }
        } while((isNaN(num1) || num1 !== num2) && respuesta !== "si")
   }
   
    console.log(resultado)
    jugar()
    if(num1 == 5){
        alert("10 + 5 = 15")
    } 
    if(respuesta == "si"){
        resultado.push("La respuesta es 5")
        alert(resultado)
    }
    
