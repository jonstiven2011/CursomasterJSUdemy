'use strict'

//LocalStorage, este guardar informacion permanente en el navegador entre sesiones

//Comprobar disponibilidad de localStorage
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage Disponible");
}else{
    console.log("no disponible LocalStorage");
}

//Guardar datos en localStorage
localStorage.setItem("titulo","Curso de JS");

//Recuperar elemento y mostrar
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos en localStorage
var usuario = {
    nombre: "Stiven Mafla",
    email: "jonstivennava@gmail.com",
    telefono: 3156205482
}
//Se cambio el formato json en un string con la palabra el metodo JSON.stringify
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar ese objeto JSON.stringify
var userjs = JSON.parse(localStorage.getItem("usuario"));
var Datos = document.querySelector("#datos")
datos.append("Nombre: "+userjs.nombre);
datos.append("Email: "+userjs.email);
datos.append("Telefono: "+userjs.telefono);

/*
//borrar esa memoria
localStorage.removeItem("usuario");
//Vacias completamente la memoria
localStorage.clear();
*/
