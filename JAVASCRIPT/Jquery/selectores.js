'use strict'

//Tipos de selectores
$(document).ready(function(){

    //Selector ID
    var rojo = $("#rojo").css("background","red")
                         .css("color","white");

    var amarillo = $("#amarillo").css("background","yellow")
                                 .css("color","green");
    var verde = $("#verde").css("background","green")
                            .css("color","white");;
    console.log(rojo,amarillo,verde);

    //Selectores de clases
    var clase_zebra = $('.zebra').css("padding","5px");
    //clase_zebra.css("border","5px dashed black")
    console.log(clase_zebra);

    $('.sin_borde').click(function(){
        console.log("Click dado");
        $(this).addClass('zebra');
    });
    
    
});