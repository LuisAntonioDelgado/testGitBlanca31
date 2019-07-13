let nombre=document.getElementById('nombre')
let numero=document.getElementById('numero')
let pizza=document.getElementById('pizza')
let boton=document.getElementById('boton')
let encabezadoNombre=document.getElementById('EncabezadoNombre')
let encabezadoNumero=document.getElementById('EncabezadoNumero')
let encabezadoPizza=document.getElementById('EncabezadoPizza')
let card=document.getElementById('card')

const mostrarNombre=()=>{

    let nom=nombre.value
    encabezadoNombre.innerHTML=nom
}

const mostrarNumero=()=>{

    let num=numero.value
    encabezadoNumero.innerHTML=num
    
}

const mostrarPizza=()=>{

    let pi= pizza.value
    let pis=pi.toLowerCase()

    if(pis==='si'){

        encabezadoPizza.innerHTML=":("
    }else if(pis==='sí'){

        encabezadoPizza.innerHTML=":("

    
    }else if(pis==='no'){

        encabezadoPizza.innerHTML=":)"
    }else{

        encabezadoPizza.innerHTML="No respondiste la pregunta"

    }
    
}


//Aparecer la card
const desaparecerDisplay=()=>{

    card.classList.remove("desaparecer")

}

boton.addEventListener('click',mostrarNombre)
boton.addEventListener('click',mostrarNumero)
boton.addEventListener('click',mostrarPizza)

//Aparecer la card
boton.addEventListener('click',desaparecerDisplay)





