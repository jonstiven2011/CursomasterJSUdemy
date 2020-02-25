'use strict'

/**************FUNCIONES DE TIEMPO*******TIMERS********* */

window.addEventListener('load', function(){
    //setInterval se ejecuta continuamente
    //setTimeout se ejecuta solo una vez

    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set interval ejectuado");
    
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        
        }, 1000);
        return tiempo;
    }
    
    var tiempo = intervalo();

    //Parar el bucle
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function(){
        alert("Has parado el intervalo de bucle");
        clearInterval(tiempo);
    });

    //Iniciar el bucle
    var start = document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("Has iniciado el bucle");
        intervalo();
    });

});