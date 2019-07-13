let etiqueta=document.getElementById('etiqueta')
let subtitulo=document.getElementById('subtitulo')
let mostrar=document.getElementById('mostrar')
let input=document.getElementById('input')
let boton=document.getElementById('boton')

//console.log(etiqueta)
//console.log(texto)

//etiqueta.innerHTML='Es un nuevo saludo'
//texto.innerHTML='Es un nuevo texto'

const cambiar= () =>{

    etiqueta.innerHTML='Es un nuevo saludo'
    subtitulo.innerHTML='Es un nuevo texto'
    

}

const mostrarInput=()=>{

    let texto=input.value
    mostrar.innerHTML=texto
}

boton.addEventListener('click',cambiar)

boton.addEventListener('click',mostrarInput)