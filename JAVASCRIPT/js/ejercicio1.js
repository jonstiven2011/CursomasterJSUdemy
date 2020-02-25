'use strict'

/*Ejercicio 1
Programa que pida dos numeros y quenos diga cual es el mayor, el menor y si son iguales
PLUS: si los numeros no son un numero o son menores o iguales a cero, no los vuelva a pedir
*/

var num1 = parseInt(prompt("Introduce el primero numero",0));
var num2 = parseInt(prompt("Introduce el segundo numero",0));
//console.log(num1,num2);
//Funcion para que introduzca un numero valido hasta que sean numeros correctos
while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    var num1 = parseInt(prompt("Introduce el primero numero",0));
    var num2 = parseInt(prompt("Introduce el segundo numero",0));
    break;
}

if(num1 == num2){
    alert("los numeros son iguales");
}else if(num1 > num2){
    alert("El numero mayor es: "+num1+" el numero menor es: "+num2);
}else if(num2 > num1){
    alert("El numero mayor es el: "+num2+" y el numero menor es: "+num1);
}else{
    alert("Por favor ingresa numeros validos");
}