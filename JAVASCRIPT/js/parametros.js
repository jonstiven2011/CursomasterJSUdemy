'use strict'

//Parametros

function calculadora(num1, num2){
    console.log("Suma: "+(num1+num2));
    console.log("Resta: "+(num1-num2));
    console.log("Multiplicacion: "+(num1*num2));
    console.log("Division: "+(num1/num2));
    console.log("*******************************");

    return "Resultados de la calculadora";
}

//Invocar funcion
// calculadora(12,8);
// calculadora(98,2);

for(var i = 1; i<=10; i++){
    console.log(i);
    calculadora(i,8);
}