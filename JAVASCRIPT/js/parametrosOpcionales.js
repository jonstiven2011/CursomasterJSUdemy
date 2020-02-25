'use strict'

//Parametros

function calculadora(num1, num2, mostrar = false){

    //Conjunto de instrucciones a ejecutar
    if(mostrar == false){
    console.log("Suma: "+(num1+num2));
    console.log("Resta: "+(num1-num2));
    console.log("Multiplicacion: "+(num1*num2));
    console.log("Division: "+(num1/num2));
    console.log("*******************************");
    }else{
        document.write("Suma: "+(num1+num2),"<br/>");
        document.write("Resta: "+(num1-num2),"<br/>");
        document.write("Multiplicacion: "+(num1*num2),"<br/>");
        document.write("Division: "+(num1/num2),"<br/>");
        document.write("*******************************"),"<br/>";
    }
    //return "Resultados de la calculadora";
}

calculadora(2,4,true);
//Invocar funcion
// calculadora(12,8);
// calculadora(98,2);

// for(var i = 1; i<=10; i++){
//     console.log(i);
//     calculadora(i,8);
// }