'use strict'

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad duele", "Interstellar","Gran torino"];
//mete un array dentro de otro array
var cine = [categorias, peliculas];

//ordenar un array de forma alfabetica
peliculas.sort(); //con reverse invierte el array de posicion
console.log(peliculas);
/*
console.log(cine[0][1]); //Terror
console.log(cine[1][1]); //Interstellar
*/


/*Introduce elementos a un array con el usuario
do{
    var elemento = prompt("Introduce tu pelicula, al terminar escribe 'listo'");
    peliculas.push(elemento);
}while(elemento != "listo");
//pop eliminar el ultimo elemento de un array
peliculas.pop();
//añade un campo mas al array
//peliculas.push("Batman");
console.log(peliculas);

*/

//convertir un array en un strign
var peliculas_string =  peliculas.join();
//convertir una cadena en un array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array)