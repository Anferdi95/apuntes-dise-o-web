'use strict'

const li = document.querySelectorAll('.li')
const bloque= document.querySelectorAll('.bloque')



// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo');


            // Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo');
        })

        li[i].classList.add('activo')
        
        bloque[i].classList.add('activo')

    });
})