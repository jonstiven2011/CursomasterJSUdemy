'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Introduce el primero numero",0));
var num2 = parseInt(prompt("Introduce el segundo numero",0));

document.write("<h1>De "+num1+" a "+num2+" estan estos numeros:</h1>");
for(var i = num1; i <= num2; i++ ) {
    document.write(i+"<br/>");
}
// console.log("El primer numero que introdujo fue el: "+num1);
// console.log("El segundo numero que introdujo fue el: "+num2);
