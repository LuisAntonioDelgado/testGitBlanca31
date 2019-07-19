let boton=document.getElementById('bob')

let i=0

const agregarValores=()=>{

let registro1=document.getElementById('registro1').value
let rcorreo1=document.getElementById('rcorreo1').value


if(registro1==""){

    document.getElementById('registro1').focus()

}else{

        if(rcorreo1==""){

            document.getElementById('rcorreo1').focus()
        }else{

            console.log(registro1)
            console.log(rcorreo1)
            let activador=1
            localStorage.setItem('REGISTRO',registro1)
            localStorage.setItem('CORREO',rcorreo1)
            localStorage.setItem('Activador',activador)
            document.getElementById('registro1').value=""
            document.getElementById('rcorreo1').value=""
            document.getElementById('rcorreo1').focus()

        }

}

activador=0

}





boton.addEventListener('click',agregarValores)