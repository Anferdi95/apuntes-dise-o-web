//--------------------------------------------------------
//PARTE 1:declaramos nuestras variables  y referencias del DOM
//--------------------------------------------------------
const cargarBtn=document.querySelector("#cargarBtn");
const limpiarBtn=document.querySelector("#limpiarBtn");
const filtraBtn=document.querySelector("#filtrarBtn");

const spinner=document.getElementById("spinner");
const perfilContainer=document.getElementById("perfiles");
const errorContainer=document.getElementById("error");
const errorText=document.getElementById("errorText");

const listaUsuarios =[];


//--------------------------------------------------------
//PARTE 2:FUNCIONES Y EVENT LISTNERS
//--------------------------------------------------------

//funcion para mostrar/ocultar spinner
const toggleSpinner=(visible)=>{
//spinner.classList.toggle("hidden");
if (visible=="on"){
    spinner.classList.add("hidden");
}else{
    spinner.classList.remove("hidden");
}
}

    //funcion para mostrar error
const mostrarError=(mensaje)=>{
errorText.textContent=mensaje;
errorContainer.classList.remove("hidden");
}

//funcion para ocultar error
const ocultarError=()=>{
errorContainer.classList.add("hidden");
}

const mostrarDatos =(listaUsuarios)=>{
    perfilContainer.innerHTML="";

    if (listaUsuarios.length ==0 ) {
perfilContainer.innerHTML="No se encontraron usuarios en la vase de datos "
   return ; // salimos de la funcion antes 

    }

    //imprimir
    listaUsuarios.foreach(usuario => {
    perfilContainer.innerHTML += crearTarjetaPerfil(usuario);
    });
}

const crearTags=(listaDeItems)=>{

    listaDeItems.map(item=>{
        return  `<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">${item}</span> `
    })

return miHtml.join (' ');
}

    const crearTarjetaPerfil =(usuario)=>{
    //deconstruccion e objetos
    const { id, nombre, profesion, habilidades, experiencia, avatar } = usuario;

const habilidadesEtiquetas = crearTags (habilidades) ;

        return `

   <div class="profile-card bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex items-center justify-center h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <img class="h-24 w-24 rounded-full border-4 border-white object-cover" src="${avatar}" alt="${nombre}">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">${nombre}</h3>
                <p class="text-indigo-600 font-medium">${profesion}</p>
                    <div class="mt-3">
                        <p class="text-gray-700"><span class="font-semibold">Experiencia:</span> ${experiencia}años</p>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2">
                    ${habilidades}
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">HTML</span> 
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                    </div>
                </div>
            </div> ` ;
  
}


function esperar(milisegundos) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milisegundos);
}

// const cargarDatos =() =>{
//     //hacer el fetch aca
//     fetch("./db/datos.json")
//     .then ( response => response.json() ) 
//     .then ( data =>{
//         //nuestro codigo con los datos
//         console.log("tus datos de la DB son ", data );// llamar la funcion der mostrar datos
//         mostrarDatos(data);

//     })

// .catch  ( e => {
//     console.warn ("tuvimos un error obtiendo los drtos");
// });

// }

const cargarDatos =async() =>{
try{
    const response = await fetch ("./db/datos.json");
    const listaUsuarios = await response.json();
    
    //llamar a la funcion  de mostrar en el html
    mostrarDatos(listaUsuarios);
}catch (error){
    console.warn ("tuvimos un error obtiendo los drtos");
    }
}
   



cargarBtn.addEventListener("click", cargarDatos);  


//--------------------------------------------------------
//PARTE 3:Código de nuestra app
//--------------------------------------------------------

mostrarError("CUIDADO ESTAS POR ROMPER TODO");
toggleSpinner("on");
toggleSpinner("off");


