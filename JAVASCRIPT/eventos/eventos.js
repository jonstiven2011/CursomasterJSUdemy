'use strict'

/* Cargar todos los elemetos del DOM */
window.addEventListener('load', () =>{
    // Eventos del ratón
    //var boton = document.querySelector('#boton');

    function cambiarColor(){
        if( boton.style.background == "green"){
            boton.style.background ="red";
            
        }else{
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        //return true;
    }

    //Llamar la funcion del boton de otra manera
    var boton = document.querySelector('#boton');
    //Evento Click
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    //Evento Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "yellow";
    });

    //Evento Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "#ccc";
    });
    //*****************MAS EVENTOS********************************* */

    //Focus
    var input = document.querySelector("#campo_nombre");
        input.addEventListener('focus', function(){
        console.log("[focus] Estas dentro del input");
    });

    //Blur
        input.addEventListener('blur', function(){
        console.log("[blur] Estas fuera del input");
    });

    //Keydown
    input.addEventListener('keydown', function(event){
        console.log("[keydown] Pulsado esta tecla", String.fromCharCode(event.keyCode));
    });

    //Keypress
    input.addEventListener('keypress', function(event){
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
    });

    //Keyup
    input.addEventListener('keyup', function(event){
        console.log("[keyup] Tecla Soltada", String.fromCharCode(event.keyCode));
    });

});
