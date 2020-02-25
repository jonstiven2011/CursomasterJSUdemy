'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var milisegundos = fecha.getMilliseconds();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
    El minuto es: ${minutos}
    Los segundos son: ${segundos}
    El milisegundo es: ${milisegundos}
`;
console.log(textoHora);


/**Funciones matematicas */

console.log(Math.ceil(Math.random()*10000));
