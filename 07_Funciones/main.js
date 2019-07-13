//Funciones

// function suma(a,b){
//     console.log(a+b)

// }

// suma(5,6)
// suma(6,6)
// suma(10,10)

// function resta(a,b){

//     return a-b
// }
// console.log(resta(10,4))
// console.log(resta(resta(10,4),4))

// function areaCuadrado(a){

//     return a*a
// }


// const areaC =(lado) =>{

//     return lado*lado
// }
// const areaT =(base,altura) =>{

//     return (base*altura)/2
// }


// let lado=Number(prompt("Ingresa la medida de L: "))
// console.log(areaC(lado))



// let figura=Number(prompt("Ingresa la figura que tienes: \n 1) Cuadrado \n 2) Triangulo"))

// switch(figura){

//     case 1:

//         let lado=Number(prompt("Ingresa la medida de L: "))

//         console.log("El area es: "+areaC(lado))

//     break;

    
    
//     case 2:

//         let base=Number(prompt("Ingresa la medida\n de base: "))
//         let altura=Number(prompt("Ingresa la medida de altura: "))
//         console.log("El area es: "+ areaT(base,altura))
//         break;

// }

// const operacion = (a,b,c,d,e) =>{

//     let resultado= ((a+b)-(c+d))*e
//     return resultado
// }

// let a=Number(prompt("Ingresa el parametreo a: "))
// let b=Number(prompt("Ingresa el parametreo b: "))
// let c=Number(prompt("Ingresa el parametreo c: "))
// let d=Number(prompt("Ingresa el parametreo d: "))
// let e=Number(prompt("Ingresa el parametreo e: "))

// let resultado=operacion(a,b,c,d,e)


// console.log("a= : "+a)
// console.log("b=: "+b)
// console.log("c= : "+c)
// console.log("d= "+d)
// console.log("e=: "+e)
// console.log("El resultado es: "+resultado)

const contra=(contra,contrasena)=>{

    let encabezado=document.getElementById('encabezado')
    if(contra===contrasena){

        encabezado.innerHTML='La contraseña es correcta, bienvenidos'
    }else{

        encabezado.innerHTML='La contraseña es incorrecta, Vuelve a intentarlo'
    }
}

const password="gatitos13"
let cont=prompt('Ingresa la contraseña')
contra(cont,password)