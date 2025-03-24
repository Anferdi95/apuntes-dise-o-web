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



const cargarDatos =() =>{
    //hacer el fetch aca
    fetch("./db/datos.json")
    .then ( response => response.json() ) 
    .then ( data =>{
        //nuestro codigo con los datos
        console.log("tus datos de la DB son ", data );// llamar la funcion der mostrar datos
        mostrarDatos(data);

    })

.catch  ( e => {
    console.warn ("tuvimos un error obtiendo los drtos");
});

}

cargarBtn.addEventListener("click", cargarDatos);  


//--------------------------------------------------------
//PARTE 3:Código de nuestra app
//--------------------------------------------------------

mostrarError("CUIDADO ESTAS POR ROMPER TODO");
toggleSpinner("on");
toggleSpinner("off");