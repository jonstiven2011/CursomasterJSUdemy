'use strict'
/*
Calculadora:
-Que pida dos numeros por pantalla
-Si metemos uno mal que nos los vuelva a pedir
-En el cuerpo de la pagina, en una alerta y por lo consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras
*/

// var numero1 = parseInt(prompt("Introduce el primer numero",0));
// var numero2 = parseInt(prompt("Introduce el segundo numero",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Introduce el primer numero",0));
    var numero2 = parseInt(prompt("Introduce el segundo numero",0));
    break;
}

var resultado = "La suma es: "+(numero1+numero2)+"<br/>"+
                "La resta es: "+(numero1-numero2)+"<br/>"+
                "La multiplicacion es: "+(numero1*numero2)+"<br/>"+
                "La division es: "+(numero1/numero2)+"<br/>";

var resultado2 = "La suma es: "+(numero1+numero2)+"\n"+
                "La resta es: "+(numero1-numero2)+"\n"+
                "La multiplicacion es: "+(numero1*numero2)+"\n"+
                "La division es: "+(numero1/numero2)+"\n";

document.write("El resultado de los numeros: "+numero1+" y "+numero2+"<br/>"+resultado);
alert(resultado2);
console.log(resultado2);