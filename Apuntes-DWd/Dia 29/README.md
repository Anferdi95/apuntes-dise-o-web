

## Operacion Ternaria

Una forma de reescribir el `if ... else...`. se componen de tres partes:

1. una expresion que se evalua
2. expresion que se ejecta en caso de ser cierta
3. expresion que se ejecuta en caso de ser falsa

Simplemente la legibilidad, pero no se recomienda para anidar operaciones ternarias, o cuando el resultado de la operacion es muy complejo.

```js
let numero = 10;
let mensaje;
if(numero% 2 == 0){
    mensaje="Es par";
} else{
    mesnaje="Es impar";
}

//version ternanria :

let mesnaje = (numero%2 ===0)? "Es par": "Es impar";


//ejempo 1
if(edad >=18){
    mensaje ="Es mayor de edad";
} else{
    mensaje ="Es menor de edad";
}
//version ternanria-

let mensaje = (edad >=18) ? "Es mayor de edad": "Es menor de edad";
let mensaje = edad >= 18 ? "Es mayor de edad": "Es menor de edad";
let mensaje = edad >= 18 ? "Es mayor de edad"
                         : "Es menor de edad";

```
- No se pueden utilizar ternarias si no tengo el else (solo sirve si tengo truthy y falsy)
- Solo se puede utilizar cuando


```js
// ejempleo 2
// funcion que recibe 2 numeros y devuelve el mayor
function mayor(num1, num2 ) {
   if (num1>num2){
   return num1;
} else {
    return num2;
}
}
function mayor (num1, num2){
return num1 > num2 ? num 1: num2;
}

numMayor = mayor (5, 3); //5
numMayor = mayor (-5, 7); //7

// ejemplo 3
// crear una funcion que reciba 2 parametros ("jugador1" y "jugador2"), y que devuelva si el "jugador1" le gana en "piedra", "papel", "tijera"

function juego(jugador1, jugador2) {
  if (jugador1 === jugador2) 
    return "Empate";
  if (
    (jugador1 === 'piedra' && jugador2 === 'tijera') ||
    (jugador1 === 'papel' && jugador2 === 'piedra') ||
    (jugador1 === 'tijera' && jugador2 === 'papel')
  ) {
    return "Jugador 1 gana";
  }
  return "Jugador 2 gana";
}

console.log(juego('piedra', 'tijera'));  // jugador 1 gana
console.log(juego('papel', 'papel'));    // Epmate
console.log(juego('tijera', 'piedra'));  // Jugador 2 gana

```

## RECORRER LISTAS O ARRAYS

### ForEach
- Recorrer cada item de un array, y ejecuta una funcion dentro del mismo.
Se le asigana una variable a cada item.
EJEMPLO:
    listaAlunos -> alumno
    listaLetras -> letra
    listaHobbies -> hobbie

```js
const listaLetras = [ "a", "b", "c"];
listaLetras.forEach((letra)=>{
    letra =letra.toUpperCase();
     console.log(letra);

})
// //para solo una letra

// listaLetra.forEach((letra) =>{
// letra =letra.toUpperCase();
// console.loge     //terminar mirando el video de la clase grabada
// })
 


```

## para modficar elementos con un forEach

si queremos usar el indice podemos leerlo agregando un segundo parametro a nuestra funcion flecha .

```js
const listaLetras = [ "a", "b", "c"];
listaLetras.forEach((letra, indice)=>{
    
    console.log (letra,indice);
    listaLetras[indice]=letra.toUppercase();
})

console.log(listaLetras;)
```

## MAP

Si deseamos generar una copia de la lista, podemos utiizar el medtodo map(),
quien crea un nuevo array con los reslutados de la funcion flecha.

```js

const listaNumeros = [1,2,3,4,5];

const nuevaLista = listaNumeros.map ( (numero)=>{
    return numero * 2
});

console.log(listaNumeros); //(5)[1,2,3,4,5]
console.log(nuevaLista); //(5)[2,4,6,8,10]

```

