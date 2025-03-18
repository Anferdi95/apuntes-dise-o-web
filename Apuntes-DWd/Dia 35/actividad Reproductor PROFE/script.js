
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons =document.querySelectorAll(".nav-button");
const containerCanciones =document.getElementById("containerCanciones")


listaButtons.forEach((button, idx)=>{
   

button.addEventListener("click", () =>{
    //obtenemos el id del target que queremos mostrar!
    const target = button.getAttribute('data-tab');


//actualizar la visibilidad de los bloques
listaBloques.forEach(bloque =>{
    bloque.classList.remove(`active`);
        //si el bloque es el que me intereza, agregar active
        if(bloque.id==target){
            bloque.classList.add("active");
        }
        
});



//actualizar el boton activo de navegacion

listaButtons.forEach(btn =>{
    btn.classList.remove(`active`);
});
            btn.classList.add("active");
        });
        
});


const listaTemas= [
    {    id: 1,
         titulo: "La noche de anoche", 
         artista: "Bad Bunny", 
         imagen: "https://picsum.photos/id/100/200/300",
         fuente:"https://archive.org/details/rosalia-aunque-es-de-noche/BAD+BUNNY+x+ROSAL%C3%8DA+-+LA+NOCHE+DE+ANOCHE.mp3" },

    {   id: 2, 
        titulo: "Azucar",
         artista: "Celia Cruz", 
         imagen: "https://picsum.photos/id/200/200/300", 
         fuente:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },

    {   id: 3,
         titulo: "Mamaaa", 
         artista: "Fredy Mercury",
          imagen: "https://picsum.photos/id/300/200/300",
          fuente:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },

    {    id: 4,
         titulo: "4 babys", 
         artista: "Maluma", 
         imagen: "https://picsum.photos/id/400/200/300", 
         fuente:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },

    {    id: 5,
         titulo: "Mañana sera mas bonito", 
         artista: "Karol G", 
         imagen: "https://picsum.photos/id/500/200/300", 
         fuente:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
]

//---------------- NAVEGACION ----------------//
listaButtons.forEach((button)=>{

});



//---------------- LISTAR TEMAS ----------------//
listaTemas.forEach(tema =>{
    //deconstruccion del objeto "tema"
const {id, titulo, artista, imagen, fuente}= tema;
console.log(titulo);

//usamos innerHTML para crear nuestros temas
containerCanciones.innerHTML += `<li class="cardCancion">
                <img  class="imgCancion" src=${imagen} alt="">
                    <div>
                     <h2 class="tittleCancion>${titulo}</h2>
                    <small class="artistaCancion"> ${artista}</small>
                    </div>
                </li>   ` ;
  
})



//---------------- REPRODUCTOR ----------------//

