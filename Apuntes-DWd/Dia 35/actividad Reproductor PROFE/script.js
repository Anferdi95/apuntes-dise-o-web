
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

// letidCancionActual

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
containerCanciones.innerHTML += `<li class="cardCancion" data-id=" ${id}">
                <img  class="imgCancion" src=${imagen} alt=" ${artista}">
                    <div>
                     <h3 class="tittleCancion>${titulo}</h3>
                    <small class="artistaCancion"> ${artista}</small>
                    </div>
                </li>   ` ;
  

// agarrar el ultimo hijo agregado para incluirle un evenListenner
const cardCancion = containerCanciones.lastChild;

cardCancion.addEventListener("click", ()=>{
cargarCancion(id);

//opcional: pasar a la pestaña de reproduccion
document.querySelector("[data-tab='tab3']").click();
}) ;

})



//---------------- REPRODUCTOR ----------------//

const playBtn = document.querySelector(".fas fa-step-backward");
const pauseBtn = document.querySelector(".fas fa-pause");
const nextBtn = document.querySelector(".fas fa-play");
const prevBtn = document.querySelector(".fas fa-step-forward");
const audioPlayer =document.querySelector("#audioPlayer");




pauseBtn.style.display="none";

//funcion para cargar un tema

function cardCancion(id){
//recorremos nuestras canciones y obtenemos solo lo que nos intereza
const cancion = listaTemas.find( tema=> tema.id == id);

if(!cancion) { return; }

console.log(cancion);
audioPlayer.src = cancion.fuente;
idCancionActual =id;

divCurrentSongInfo.innerHTML =`
 <img src="${imagen}" alt="${artista}">
                <h2>${titulo}</h2>
                <p>${artista}a</p>
            </div>`;



audioPlayer.play();
playBtn.style.display ="none"
pauseBtn.style.display ="inline"
}

//even listenner de botones de reproductor
playBtn.addEventListener("click", ()=>{
    audioPlayer.play();
  playBtn.style.display ="none"
pauseBtn.style.display ="inline"
});

playBtn.addEventListener("click", ()=>{
    audioPlayer.pause();
  playBtn.style.display ="none"
pauseBtn.style.display ="inline"
});

nextBtn.addEventListener("click", ()=>{
    posicionTemaActual ++;
   const idCancion = listaTemas[posicionTemaActual].id;
   cargarCancion(idCancion);
});
prevBtn.addEventListener("click", ()=>{
    posicionTemaActual --;
   const idCancion = listaTemas[posicionTemaActual].id;
   cargarCancion(idCancion);
});