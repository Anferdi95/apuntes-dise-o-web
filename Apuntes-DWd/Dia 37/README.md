 # CONTENIDO ASINCRONO vs SINCRONICO

 La sincronia es la ejecucion de tareas en orden secuancial,
 es decir, una tarea se ejecuta despues de otra.

 
 ```js

 console.log("Paso 1");
traerDatos();
console.log("paso3 ");

function traerDatos(){ 
    esperar (3000);
    console.log("Paso 2");
}

// simulador de tiempo
 function esperar (milisegundos){
    const start = new Date().getTime();
    while ( new Date().getTime() - start < milisegundos);
 }

 ```

 La `asincronia` es la ejecucion de tareas en orden NO secuencial, es decir una tarea se puede ejecutar antes de que la anterior haya terminado.

 La obtencion de datos aasincronos  se utilizan para:
 - Traer incormacion de DB (data bases)
 - Traer informacion de un API (Aplicacion Programa Interface)
 - Manipulacion de nuestros propios archivos


 Para lograr u na tarea asincrona, simplemente debemos enviar como parametro una funcion de `callBack` que se ejecutara al finalizar la tarea.

 ```js
 
 console.log("Paso 1");
traerDatos();
console.log("paso3 ");

function traerDatos(){ 
    setTimeout (() =>{
        console.log("Paso 2");
     }, 3000);
}
 ```

En Java Script debido a que la ejecucion ocurre en un solo hilo
(callstack), la asincronia permita que el codigo siga corriendo fimas mmientras espera tareas kentas comoleer archios, o ahcae solicitudes hhto. Esro ecita qu la inerfaz de usuario se congele mientras espera a respuesta.


## fucniones de callbalck

```js
functio procesarEntradaUsuario  (saludar){
 ver nombre = promp("Por Favor ingresa tu nombre.");
 saludar(nombre);
}
procesarEntradauSUARIO((nombre)=>{
    alert ("hola "+ nombre);
});
```

# EJERCICIO
CREAR UN CODIGO QUE MUESTRE POR CONSOLA:
1) Un comensalr solcitia a un camarero un entrante
2. el camarero va a buscar el plato solcitiado (asincrono)
3. la persona toma un vaso de agiua mientras espera
4. el camarero lleva el palto a la mesa
5. la persona se come el palto de comida


```js
let plato="ensalada";
console.log("1) Un comensalr solcitia a un camarero un entrante", plato);
hacerPedido(plato, ()=>{;
console.log ("4. el camarero lleva el palto a la mesa ");
console.log ("5. la persona se come el palto de comida ");
})
console.log (" 3. la persona toma un vaso de agiua mientras espera");


function hacerPedido(plato, callback){
    console.log ("2. el camarero va a buscar el plato ", plato);
    setTiempo{ ( )=>{
        //luego de preparar el palto ejecuto la funcion callback
        callBack()
    }, 3000};
    };
```

# PROMESAS

Una promesa es un objeto que represneta la `terminacion `o el `fracaso` de una operacion asincorona.
Puede estar en uno de estos 3 estados;
- `PENDIENTE:` Cuando aun no se ha completado, y no se sabe si se completara con exito o no.
- `RESUELTA:` (resolve) cuando se ha completado con exito.
- `RECHAZADA:` (reject) cuando ocurre un error.

```js 
const miPromesa = new Promise((resolve, reject)=>{
    console.log("Te prometo que entrego el proyecto");

    setTimeout (()={
// resolve ("EXITO, presente el proyecyo");

reject("ERROR , mi github no funciono")
    }, 3000)
});

miPromesa.then( result => console.log(result))
.catch(error => console.log("Tuve un error", error ))
.finally(() =>console.log("Finalmente terminé (con error o exito)"))

```
LAS PROMESAS SE PUEDEN ENCADENAR:

```JS 
miPromesa.then( result => { //result = 5
return resul + 3;
    console.log (result); // result = 8
    return result2 / 2;
})
.then( result2 => { // result = 4

    console.log (result);
})
.then( result3=> {

    console.log (result);
})
.catch (error =>console.log("tuvwe un error" , error))
.finally(() =>console.log("les pongo una calificaion"))
```
## FETCH API CON.then() y .catch()
Uno de los usos fundamentales de las promesas, es el uso de las Fetch API para realizar `peticiones HTTP` a otros servidores.
La funcion `fetch()` nos permite hacer una peticion, y nos devuelve una pronesa.


```js

fetch(" https://jsonplaceholder.typicode.com/users/1")
.then ( response => response.json() ) //convertir nuestra respuesta a JSON 
.then  (datos =>{
    //nuestro codigo con los datos
    console.log(datos)
})
.catch (error => console.warn("Tuvimos un error", error));

```

EJERCICIO :Obtener 10 usuarios de la pagina de JsonPlaceholder, y mostrar en html una tarjeta para cada uno. ` https://jsonplaceholder.typicode.com/users/`