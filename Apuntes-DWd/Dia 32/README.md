
## Listenner para eneventos del usuario

Son funciones que se ejecutan a eventos especdficos que ocurren en el DOM, como por ejemplo clicks, movimiento del mouse, teclas personalizadas, teclas levantadas, etc. Para agregar un evento usamos `addEvenListenner(evento,function)`;

g

```js
//seleccionar item del DOM  
const boton = document.querySelector('buton');

// Agrefar un event listenner para el evento del click
boton.addEvenListenner("click", miFuncion);
boton.addEvenListenner("click",()=>{});

function mifuncion(){
    console.log("HOLA")
}

```
## Pasar parametros a funciones con eventos
A veces enviar parametro a la funcion qie  maneja el evento

```js
boton.addEvenListenner("click",function(
miFuncion("Tomi");
));

//ejecutar la funcion sin enviar parametro
btn.addEventListenner("click",mifuncION);

// Ejecutar la funcion enviandoparamentro. la debo ordenar dentro de una funcion 
boton.addEventListenner ("click"()=> miFuncion("aria"));

function miFuncion(usuari){
console.log(`hola ${usuario}`);
}
```

    EJERCICIO 

1. cambiar el color de un elemento al hacerle click.
crear 2 botones (rojo y azul) que cambien el color de fondo de un bloque, al hacer click. la funcion de cambiar de color debe ser la misma.

2. Mensaje al pasar el mouse:
Crear un elemento que muestre un mensaje cuando el raton pase por ecnima de el.



## Parametro "e" (event/evento)

Es un objeto que contiene inforemacion sobre el evento ocurrido. este se pasa automaticamente a la funcion que maneja el evento.

```js
function handleClick(){
    console.log("el boton ha sido clickeado");
    console.log("Coordenadas del Mouse", e,clientX, clientY)
}
 boton.addEvenListenner("click", handleClick);

```

    3. Crear un formulario que valide la entrada de un usuario, y que muestre en pantalla si la entrada no es valida.