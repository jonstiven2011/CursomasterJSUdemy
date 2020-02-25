'use strict'

//Transformacion de textos de cadenas

var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";

//.toUpperCase() convierte a mayuscula
//toLocaleLowerCase() convierte en minuscula
var dato = numero.toString();
    dato = texto1.toUpperCase();
    //dato = texto2.toLocaleLowerCase();
//console.log(dato);

// Calcular longitud
//La propiedad length muestra la longitud de un string o de un array
var nombre = "jonatan navarro";
    nombre = ["hola","Hola"];
//console.log(nombre.length);

//Concatenar = unir textos
//var textoTotal = texto1+" "+texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);