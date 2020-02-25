'use strict'
//Condicionales if
//Si A es igual a B entonces haz algo

var edad = 74;
var nombre = "Carlos Suarez";
/*Operadores ralacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=

*/
if(edad >= 18){
    console.log(nombre+" Tiene "+edad+" años, es mayor de edad");
    if(edad == 33){
        console.log("Todavia eres millenial");
    }else if(edad >=70){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres millenial");
    }
}else{
    console.log(nombre+" Tiene "+edad+" años, es menor de edad");
}


/*Operadores logicos
AND(Y): &&
OR(O): ||
NEGACION: !
*/

//Negacion
var year = 2018;

if(year != 2016){
    console.logo("El año no es de 2016, realmente es: "+year);
}
//AND
if(year >= 2000 && year <= 2020 ){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}