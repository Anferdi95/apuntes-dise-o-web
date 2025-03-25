
# Async / Await

La desventaja de las promesas es que de vuleven dificiles de entender cuando se anidan. Por eso se desarrollo `async / away`.
Es mas facil de leer y entender que las promesas con callbacks.

## Ventajas
- Legibilidad: Se parece mas al codigo sincrono tradicional, lo que facilita el seguimiento del flujo de ejecucuion.
- Manejo de Errores: Con el uso de `try / catch`para manejar errores.
- Evitar "callback hell"


```js
//mismo codigo con asyn / away

async function traerDatos(){

try{
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const datos = await response.json();


console.log(datos);
    console.log(datos[0]); //los datos de primer usuario

    // simulamos un segunfi request, trayendo los post del primer susario
const responsePost = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${datos[0].id}`);
    const datosPost = await responsepost.json();

    } catch (error){
        console.log("tuvimos un error:", error);
    }

}
```
`EJERCICIO`
```JS 

//version 1
console.log(" 1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");

console.log("3) la persona se toma el vaso de agua");

function pedirPlato(plato) {

    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    fetch("http://restaurante.com/api/traerPlato")
        .then(response => response.json())
        .then(datos => {
            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
            console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}
```

```js

//VERSION FETCH CON ASYN / AWAY
console.log(" 1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");

console.log("3) la persona se toma el vaso de agua");

const pedirplato =async(plato) =>{    //async function pedirPlato(){ 
    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    
    try{
    const buscarPlato = await fetch(`http://restaurante.com/api/traerPlato/${plato}`)
    const miPlato =await buscarPlato.jason();

    //que hacer con esos datos...
    console.log("Paso 4: El camarero lleva el plato de :", miplato.plato);
    console.log("Paso 5: El comensal se come su comida");

 } catch (e) {
console.log("No tenemos mas atún, lo siento", e);

 }

}