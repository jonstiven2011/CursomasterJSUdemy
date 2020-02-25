'user strict'
//Pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero);


if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);


//prueba con let

var texto = "Curso js";
console.log(texto)//valor el mismo

//let actua a nivel de bloque y no global
if(true){
    let texto = "Curso Laravel 6";
    console.log(texto);
}

console.log(texto);
