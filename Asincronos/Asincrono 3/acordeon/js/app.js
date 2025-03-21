'use strict'
const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')

//cuandi click en h2
//quitar la clase activo a todos los bloques
//vamos a añadir la clase activo al bloque con la posicon de h2

h2.forEach( ( cadah2 , i)=>{
    h2[i].addEventListener('click', ()=>{

        bloque.forEach((cadaBloque , i)=>{
            bloque[i].classList.remove('activo')
        })
     bloque[i].classList.add('activo')
       
    })
})
