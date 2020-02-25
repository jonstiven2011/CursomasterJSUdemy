'use strict'


//Json - Javascript Objet Notation

var pelicula = {
    titulo: 'Batman vs superman',
    year: 2017,
    pais: 'Estados Unidos'
}

var peliculas = [
    {
        titulo: "LA verdad duele",
        year: 2011,
        pais: "Colombia",
        pelicula
    },
    {
        titulo: "La ultima Noche",
        year: 2015,
        pais: "Francia",
    },pelicula
];

var caja_peliculas = document.querySelector('#peliculas');
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year);
    caja_peliculas.append(p);
}

console.log(peliculas);
