'use strict'
//arrays o arreglos, o matrices

//dos formas de hacer un array
var nombres = ["Carlos","Martin","Eduardo","Juan"];

var lenguajes = new Array("PHP","JS","GO","JAVA","PYTHON","C#");

//console.log(nombres[2]);


/*Arrays Avanzados
con la propiedad .length se puede conocer la cantidad de arrays que existen
*/

//conoce la posicion del elemento que un usuario quiera
/*
var elemento = parseInt(prompt("Que elemento del array quieres?",0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/
/*************************************************************** */

//Recorrer todo el array y mostrar todos los elementos
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</ul>");
