'use strict'

//Transformacion de textos de cadenas

var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";

//indexOf busca la palabra relacionada
//search tambien hace la busqueda
//match devuelve una coleccion de los resultados relacionados, en un array
//substr saca la palabra desde uno desee, 14,5
//startsWith busca las palabras o letras al inicio de algun texto o tambien
//se puede utilizar endsWith para buscar al final de un texto
//includes busca la palabra exacta, y lo devuelve como false o true
/*var busqueda = texto1.includes("JS");
console.log(busqueda);
*/
//******************************************************************* */

/*Funciones de reemplazo 
-replace, este reemplaza una palabra por otro, ej: "js","angular"
-slice, este separa un string desde una posicion deseada ej: 23 y se mostrara de ahi en adelante
-split este mete todo el texto en un array, o tambien se puede separar las palabras por espacios
-trim quita los espacios por delante y atras 
*/
var busqueda = texto1.split(" ");
console.log(busqueda);