'use strict'

//Parametros Rest y Spread
//Tres puntos despues del parametro con la palabra, este capturara el resto de parametros 
//que no esten como variables y los convierte en un array, este seria el Rest
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Papaya");

/**
 * Spread
 */
var frutas = ["Naranja","Manzana"];
listadoFrutas(...frutas,"Sandia","Pera","Melon","Coco");