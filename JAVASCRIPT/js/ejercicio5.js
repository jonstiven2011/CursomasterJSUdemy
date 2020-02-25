'use strict'
/*
Mostrar todos los numeros divisores de un numero introducido en un prompt
*/

var num1 = parseInt(prompt("Introdue un numero",1));

for(var i = 1; i <= num1; i++){
    if(num1 % i == 0){
        console.log("Divisor "+i);
    }
    
}