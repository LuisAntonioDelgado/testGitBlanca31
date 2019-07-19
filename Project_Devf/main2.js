let activador = localStorage.getItem('Activador')

let usuario1=document.getElementById('usuario1')
let usuario2=document.getElementById('usuario2')
let usuario3=document.getElementById('usuario3')

let correo1=document.getElementById('correo1')
let correo2=document.getElementById('correo2')
let correo3=document.getElementById('correo3')

let boton=document.getElementById('button')

let i=0


const registroDeUsuario=(i)=>{

let correo = localStorage.getItem('CORREO')
let registro = localStorage.getItem('REGISTRO')
console.log(correo)
console.log(registro)



    if(i===1){

        usuario1.innerHTML=registro
        correo1.innerHTML=correo 
        console.log('funciona')
    }else if(i===2){
    
        usuario2.innerHTML=registro
        correo2.innerHTML=correo
    }else if(i===3){
    
        usuario3.innerHTML=registro
        correo3.innerHTML=correo
    }
    
    

}




if(activador==1){
    i++
    registroDeUsuario(i)
}