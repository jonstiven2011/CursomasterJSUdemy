'use strict'

//Operadores 
var num1 = 7;
var num2 = 12;
var suma = num1+num2;
var resta = num1-num2;
var division = num1/num2;
var multiplicacion = num1*num2;
var porcentaje = num1%num2;


console.log("el resultado de la operacion es: " + multiplicacion);


//Tipos de datos
var num_entero = 23;
var cadena_texto = "hola mundos";
var verdadero_falso = true;

var numFalso = "33";
//La Funcion Number convierte un string en entero
//parseInt y parseFloat tambien se utilizan
//Con String se puede cambiar cualquier variable en un string es decir, en texto
console.log(Number(numFalso)+7);

//Con typeof verifica el tipo de dato que se esta usando
console.log(typeof num_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);