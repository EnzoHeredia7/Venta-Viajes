import { barcelona, roma, paris, londres } from "./ciudades.js";

//Capturar estos datos
//usando query cuando no usamos ID, sino los selectores (a,h1,p, etcetc)
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento  = document.getElementById('precio')
///Hacemos un bucle usamos un for 
enlaces.forEach(function(enlace){
   // es como agregar un onclick, es un evento
    enlace.addEventListener('click', function(){
        // remover la clase active
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
        this.classList.add('active')
    
        let contenido = obtenerContenido(this.textContent)


        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })

});

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma':roma,
        'París':paris,
        'Londres': londres

    }
    return contenido[enlace]
}
