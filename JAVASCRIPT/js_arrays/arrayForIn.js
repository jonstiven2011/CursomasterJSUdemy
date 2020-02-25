'use strict'

//Recorrer un array con forIn
document.write("<ul>");

var lenguajes = ["PHP","ORACLE","JS","IONIC"];

var precios = [23,45,74,13,78,93,42,45]

for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

/*Busqueda desde un array */
/* Esta seria una forma
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});
*/
//Otra forma mas facil
//var busqueda = lenguajes.find(lenguaje => lenguaje == "JS");

//saca el indice donde se encuentra
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");
//El metodo some busca una condicion concreta
var busquedaPrecios = precios.some(precio => precio >= 80);

console.log(busquedaPrecios);