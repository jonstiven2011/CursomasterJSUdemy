'use strict'

//Bucle While

var year = 2018;

//mientras
while(year <= 2051){
    //ejecute esto
    console.log("Estamos en el año: "+year);
    year++;
}

//tambien se puede decrementar
while(year != 1991){
    //ejecute esto
    console.log("Estamos en el año: "+year);
    if(year == 2000){
        break;
    }
    year--;
}


//Bucle Do while

// var years = 30;

// do{
//     alert("SOLO CUANDO SEA DIFERENTE A 20");
//     years--;
// }while(years > 25);