//if(condiciòn){  Bloque de codigo en caso de que se cumpla la condición
//}else{
//Bloque de codigo en caso de que el codigo no se cumpla
//}

// if(condicion){
//     console.log(':D')
// }else{

//     console.log(':c')
// }

//Operadores  
//Menor que <
//<Mayor que
//== Es identico, no igual
//=== Es igual

// if('10'==10){

//     console.log('Son identicos')
// }else{

//     console.log('Algo anda mal :c')
// }

// if('10'===10){

//     console.log('Son identicos')
// }else{

//     console.log('Algo anda mal :c')
// }


/////////////////////CHALLENGE


// let edad=prompt("Inserta que edad tienes: ")

// Number(edad)

// if(edad >= 18){

//     console.log("Puedes pasar al bar, Diviertete!!")
// }else{

//     console.log("Ve a la guarderia")
// }

// let edad=prompt("Ingresa tu edad")
// Number(edad)

// if(edad< 16){

//     console.log('No puedes sacar tu licencia')
// }else if(edad==16 || edad==17){

//     console.log('Puedes sacar tu permiso')
// }else{
//     console.log('Puedes conducir')
// }

// Otros operadores && para and o bien || que es or


// let numero=prompt("Ingresa un numero")

// let modulo=numero%2
// if(modulo===1){

//     console.log('El numero que ingresaste es: '+numero+ '  ' + 'Por lo tanto es: impar ')
// }else{

//     console.log('El numero que ingresaste es: '+numero+ '  ' +'Por lo tanto es: par')
// }

let jugador1=prompt("Jugador 1 Escoge: piedra, papel o tijera")
let jugador2=prompt("Jugador 2 Escoge: piedra, papel o tijera")

if(jugador1=== "piedra" && jugador2==="piedra"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+" El resultado es: Un empate")
}else if(jugador1==="piedra" && jugador2=="papel"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+"El resultado es: Jugador 2 Gana")
}else if(jugador1==="piedra" && jugador2=="tijera"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+"El resultado es: Jugador 1 Gana")
}else if(jugador1==="papel" && jugador2=="piedra"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+"El resultado es: Jugador 1 Gana")
}else if(jugador1==="papel" && jugador2=="papel"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+"El resultado es: Es un empate")
}else if(jugador1==="papel" && jugador2=="tijera"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+" El resultado es: Jugador 2 Gana")
}else if(jugador1==="tijera" && jugador2=="piedra"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+" El resultado es: Jugador 2 Gana")
}else if(jugador1==="tijera" && jugador2=="papel"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+" El resultado es: Jugador 1 Gana")
}else if(jugador1==="tijera" && jugador2=="tijera"){

    console.log("Jugador 1 escogio: "+jugador1+" y jugador 2 escogio: "+jugador2+'   '+" El resultado es: Es un empate")
}else{

    console.log("Los valores que ingresaste no son validos")
}
