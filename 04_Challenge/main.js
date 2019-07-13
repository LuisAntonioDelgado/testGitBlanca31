// let nombre=prompt("Ingresa tu nombre")
// let cumple=prompt("ingresa tu fecha de cumpleaños")
// let correo=prompt("Ingresa tu correo")

// console.log("Tu nombre es: "+nombre)
// console.log("Tu cumpleaños es: "+cumple)
// console.log("Tu correo es: "+correo)

// let cumple=prompt("Ingresa en que año naciste ")

//     Number(cumple)

//     let resultado=2019-cumple

//     console.log("Tu tienes: "+resultado+" años")

//Variables de tipo Arreglo

// let persona=['Ricardo','delgadoosorioluis@gmail.com','5570131786']
// console.log(persona)
// console.log(persona[2])

// 
// console.log(animales[4],animales[9])

//let arreglo=['raton','perrito','gatito']

// Agregar un elemento al arreglo
//arreglo.push('Pajarito')

//Borrar el ultimo elemento al arreglo
//arreglo.pop()

// let animales=['raton','perro','gato','grillo','leon','delfin','aguila','jirafa','león','castor']

// animales.pop();

// animales.push('Tigre','Nutria','Borrego')

// let numeros=[0,1,2,3,4,5,6,7,8,9]

// console.log(numeros)

// //Primer posición marca la posición y la segunda cuantos elementos quieres borrar
// numeros.splice(5,2)

// console.log(numeros)


//Variables de tipo objeto

// let objeto={

//     nombre: 'Luis',
//     direccion:'San Vicente',
//     musica:'Banda',
//     telefono:'5570131786',
//     libros:['Chin chin el teporocho','Rebelion en la granja'],
//     peliculas:{

//     terror:'Anabelle',
//     Accion:['Rapidos','Rambo']
//     }

// }

// console.log(objeto.direccion)
// console.log(objeto.peliculas.Accion[1])

let objeto={
Nombre:'Luis',
Dirección:'San vicente',
Correo:'delgadoosorioluis@gmail.com',
Telefono:'5570131786',

    viajes:
    {
    
        internacionales:['Ninguno'],
    nacionales:['Acapulco','Tijuana','Monterrey','Oaxaca','Puebla','Queretaro']
    
    },

    Musica:['Rock','Banda','Pop','Salsa'],
    
    peliculas:
    {
    
        Genero:['Terror','Suspenso','Animadas']
    }

}

console.log(objeto.peliculas.Genero[2])
console.log(objeto.viajes.nacionales[5])
console.log(objeto.Musica[3])