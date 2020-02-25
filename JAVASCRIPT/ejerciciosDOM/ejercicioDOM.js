'use strict'

window.addEventListener('load', function(){
    //Captura el evento submit del formulario
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");
        
        //se capturan los datos del formulario
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        //Validacion del formulario, El trim valida que no tenga espacios atras ni adelante
        //Validacion nombre
        if(nombre.trim() == null || nombre.trim().length == 0){
            //alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }
        //Validacion Apellidos
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            //alert("El apellido no es valido");
            document.querySelector("#error_apellidos").innerHTML = "El apellido no es valido";
            return false;
        }else{
            document.querySelector("#error_apellidos").style.display = "none";
        }
        //validacion edad
        if(edad == null || edad <= 0 || isNaN(edad)){
            //alert("La edad no es valida");
            document.querySelector("#error_edad").innerHTML = "La edad no es valida";
            return false;
        }else{
            document.querySelector("#error_edad").style.display = "none";
        }


        //Se muestra en el cuadro despues de capturar los datos
        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
        /*
        var datos_usuario = [nombre,apellidos,edad];

        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }*/
    });
    
});