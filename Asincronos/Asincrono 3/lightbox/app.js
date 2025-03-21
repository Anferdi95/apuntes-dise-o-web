'use strict'

//constantesy variables
const imgList=document.querySelectorAll('.img')
const lightbox=document.querySelector('.lightbox')
const grande =document.querySelector(".grande")
const closeBtn = document.querySelector('.close')
//cuando hago click en una .img
    //.lightbox se le add la clas isActive
//.grande añadirle src de la .img


imgList.forEach((eachImg , index)=>{
imgList[index].addEventListener('click',()=>{

    lightbox.classList.add(`isActive`)
    grande.src=imgList[index].src

    })
})

//cuando hago click en .close
//.lightbox se le REMOVE la clase isActive
closeBtn.addEventListener("click", ()=>{
    lightbox.classList.remove('isActive')
})