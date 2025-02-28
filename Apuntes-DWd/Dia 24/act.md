
# Actividad 1: Variables y Tipos de Datos

Escribir un programa que defina variables de diferentes tipos y las imprima en la consola.

Instrucciones:

Crea variables de tipo Number, String, Boolean, Null, Undefined, Symbol, y BigInt.
Imprime cada variable en la consola usando console.log.


```js
let numero = 30;
let nombre = "Andres";
let esMayorDeEdad = true; // o false
let valorNulo = null;
let undefined = // undefined;

console.log(numero);
console.log(nombre);
console.log(esMayorDeEdad);
console.log(valorNulo);
console.log(undefined);

```


## Actividad 2: Operadores y Expresiones

Escribir un programa que realice operaciones aritméticas y compare valores.

Crea dos variables numéricas.
Realiza operaciones aritméticas básicas (suma, resta, multiplicación, división) y guarda los resultados en variables.
Compara los dos números usando operadores de comparación y guarda los resultados en variables.
Imprime los resultados de las operaciones y comparaciones en la consola.

```js
let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

let esIgual = (a == b);
let esMayor = (a > b);
let esMenor = (a < b);

```


## Actividad 3: Estructuras de Control
Escribir un programa que use estructuras de control para tomar decisiones.

Crea una variable edad.
Usa una estructura if-else para imprimir un mensaje indicando si la persona es mayor de edad o no.
Usa un bucle for para imprimir los números del 1 al 10.


```js

let edad = 35;
const tienePermiso = true

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

//tene permiso de ailar
if (edad >= 18) {
  console.log("puede salir a bailar.");
} else {
  if(tienePermiso==true){
    console.log("puede salir a bailar");
  }
}
  for (let i = 1; i <= 10; i++) {  // para repetir una tarea
  console.log(i);
}
```



## Actividad 4: Funciones

Crea una función saludar que reciba un nombre como parámetro y devuelva un saludo personalizado.
Crea una función sumar que reciba dos números como parámetros y devuelva su suma.
Llama a ambas funciones y muestra los resultados en la consola.

```js
function sumar ( a, b){
 // return a+b;
const resultado = a+b;
return res;
}

const resultado = sumar (8,3);
console.log(resultado); 8
```

## Actividad 5: Manipulación del DOM

Escribir un programa que manipule elementos del DOM.

Crea un archivo HTML con un elemento <div> con el id "contenedor".
Escribe un script que cambie el contenido de ese <div> al hacer clic en un botón.
Ejemplo (HTML y JS):





