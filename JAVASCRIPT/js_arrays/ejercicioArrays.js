'use strict'

/*
1- Pida 6 numeros por pantalla y los meta en un array
2- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y la consola
3- Ordenarlo y mostrarlo
4- Invertir su orden y mostrarlo
5- Mostrar cuantos elementos tiene el array
6- Busquda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorará el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) =>{
    document.write("<li>"+elemento+"</li>"); 
    });
    document.write("</ul>");
}

//var numeros = new Array(6);
//pedir 6 numeros
var numeros = [];

for(var i = 0; i <= 5; i++){
    //numeros[i] = parseInt(prompt("Introduce un numero",0));
    numeros.push(parseInt(prompt("Introduce un numero",0)));
}
// Mostrar en el cuerpo de la pagina
mostrarArray(numeros);
//mostrar array en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort();
/*Para ordenar de forma numerica 
numeros.sort(function(a,b){return a-b});*/

//console.log(numeros);
mostrarArray(numeros,'Ordenados');

//Invertir y mostrar
numeros.reverse(numeros,'Revertido');

//Cuantos elementos tienes un array
document.write("<h1>El array tiene: "+numeros.length+" elementos.");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1><hr/>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1><hr/>");
}else{
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}
