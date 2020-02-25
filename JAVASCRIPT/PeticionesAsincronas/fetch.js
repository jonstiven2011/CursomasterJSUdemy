'use strict'

//https://jsonplaceholder.typicode.com/todos/1
//https://reqres.in/api/users
//Listado de usuarios
//Fetch (ajax) y peticiones a servicios / api rest
var div_usuarios = document.querySelector("#usuarios");
var div_jannet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

//var usuarios = [];
//captura los datos de la api----.then es una promesa
    getUsuarios()
        .then(data => data.json())
        .then(users => {
            //usuarios = users.data;
            listadoUsuarios(users.data); 

            return getInfo();

        })
        .then(data => {
            //console.log(data);
            div_profesor.innerHTML = data;
            return getJanet();
        })
        .then(data => data.json())
        .then(userJannet => {
            mostrarJanet(userJannet.data);
        })
        .catch(error =>{
            //el catch es para capturar los errores y mostrarlos
            alert("Error en las peticiones");
            console.log(error);
        });

//Ajax
function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

function getJanet(){
   return fetch('https://reqres.in/api/users/2');
}

//Crear promesa desde cero
function getInfo(){
    var profesor = {
        nombre: 'Jonatan stiven',
        apellidos: 'Navarro',
        correo: 'jsnavarro60911@umanizales.edu.co'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = '';
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
         
            return resolve(profesor_string);
        },3000);

        
    });
}

function listadoUsuarios(usuarios){
    //mostrar los datos capturados en pantalla 
    //map es lo mismo que foreach
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + user.first_name + " " + user.last_name + `<img src="${user.avatar}">`;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarJanet(userJannet){
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = userJannet.first_name + " " + userJannet.last_name;
        avatar.src = userJannet.avatar;
        avatar.width = '100';
        div_jannet.appendChild(nombre);
        div_jannet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display = 'none';
}