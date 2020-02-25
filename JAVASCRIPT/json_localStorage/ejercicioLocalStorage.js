'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpelicula').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
    
});

//se trae el id de la etiqueta
var ul = document.querySelector("#peliculasList");
//se recorre con un ciclo para que muestre
for(var i in localStorage){
    console.log(localStorage[i]);

    if(typeof localStorage[i] == "string"){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}
/*******************FORMULARIO BORRAR */

var formulario = document.querySelector("#formBorrarPeliculas");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#borrarPeliculas').value;

    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
    
});
