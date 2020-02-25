'use strict'
//arrays o arreglos, o matrices

//dos formas de hacer un array
var nombres = ["Carlos","Martin","Eduardo","Juan"];

var lenguajes = new Array("PHP","JS","GO","JAVA","PYTHON","C#","RUBY");

//Recorrer todo el array y mostrar todos los elementos con forEach
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" "+elemento+"</li>"); 

});
document.write("</ul>");
