//2 diferentes ciclos for y el while

// for(inicio; final o limite;secuencia){

//     Bloque de codigo
// }

// let i=0

// for(i;i<=100;i=i+1){

//     console.log(i)
// }

// for(let j=10;j<=50;j=j+10){

//     console.log(j)
// }

// for(let i=3;i<=500;i=i+9){

//        console.log(i)
// }

// for(let i=-100;i<=0;i=i+1){

//     console.log(i)
// }
// for(let i=500;i<=2000;i=i+100){

//     console.log(i)
// }

// let i=Number(prompt("Escoge un número para iniciar: "))
// let paso=Number(prompt("Escoge de cuando en cuanto quieres que valla"))


// for(i;i<=100;i=i+paso){
// console.log(i)

// }

// for(i=0;i<=100;i=i+1){

//     if(i%2===1){

//         console.log("El numero: "+i+" Es impar")
//     }else{

//         console.log("El numero: "+i+" Es par")
//     }
// }

// for(i=1;i<=100;i++){

//         if(i%3===0 && i%5===0){
    
//             console.log(i+" FizzBuzz")
//         }else if(i%3===0){
    
//             console.log(i+" Fizz")

//         } else if(i%5===0){

//             console.log(i+" Buzz")
//         }else{

//             console.log(i)
//         }
//     }

// let array=['a','b','c','d','e','f','g','h','i','j']

// console.log("Estas ingresando: "+array.length)

// for(let i=0;i< array.length;i++){

//     console.log("En la pocision: "+i+" Hay la letra: "+array[i])
// }

////////////////////////// Día 03/07/19/////////////////////////



// for(let i=1;i<=10;i++){

//     for(let j=1;j<=10;j++){

//         let resultado= i*j;
//         console.log(i+"x"+j+" = "+resultado)

//     }
// }

// let i=Number(prompt("Ingresa la tabla de multiplicar que necesites;"))
//     for(let j=0;j<=10;j++){

//         let resultado= i*j;
//         console.log(i+"x"+j+" = "+resultado)
    
//     }

let i=Number(prompt("Ingresa el numero;"))
    for(let j=i-1;j>0;j--){
     i=i*j  
    }
    console.log(i)
    

    