'use strict'
/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Introdue el primer numero",0));
var num2 = parseInt(prompt("Introdue el segundo numero",0));

while(num1 < num2){
    num1++;

    if(num1%2 != 0){
        console.log("El numero: "+num1+" es impar");
    }
}