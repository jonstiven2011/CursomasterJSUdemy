'use strict'
/*
Que nos diga si un numero es par o impar.
1- Ventana prompt
2- Si no es valida que nos pida de nuevo el numero
*/

var numero = parseInt(prompt("Introduce un numero",0));

while(isNaN(numero)){
    var numero = parseInt(prompt("Introduce un numero",0));
}
if(numero % 2 == 0){
    alert("Es un numero par");
    console.log("Es un numero par");
}else{
    alert("Es un numero impar");
    console.log("Es un numero impar");
}