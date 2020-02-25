'use strict'

//BOM - es el Browser Objet Model

function getBom(){
    //Ancho de la pantalla
    console.log("Ancho: "+window.innerWidth);
    //Largo de la pantalla
    console.log("Largo: "+window.innerHeight);
    //Saber que pagina esta cargando
    console.log("Pagina: "+window.location);
}
//Con la propiedad screen.width o heigth se puede sacar los valores exactos
getBom();

//Funcion para cambiar de pagina
function redirect(url){
    //window.location.href(url);
    window.location.href = url;
}


//Funcion para abrir ventana nueva
function abrirVentana(url){
    window.open(url,"","width=400,heigth=300");
}
