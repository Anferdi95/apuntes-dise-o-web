mirar video dia 25 a las 19:45 pm

``` js

const edad = 25

//Para que cumpla ambas opciones usar &&
if (edad<= 120 && edad >=18){
    conosle.log("eres mayor de edad");
}
// para que cumpla alguna de las 2 opciones usa || 

if (edad>= 18 || tienePermiso >=true){
    conosle.log("eres mayor de edad");
}
```

## Forma de escribir Funciones

```js

//esta funcion tiene 2 parametros y devuelve la suma de ambos
function sumar (num1, num2){
    return num1 + num2;

}
// este llamado a la funcion envia como "argumento! 2 numeros
const resultado = sumar(2, 3);

console.log(resultado);


//-----------------------
//   Funcion sin nombrar
//-----------------------
const sumar = function (num1, num2){
    return num1 + num2;
}
const alumno = {
    nombre: "juan",
    edad: 34,
    sumar: function hacerSuma (num1, num2){
        return num1 + num 2;

    }
}alumno.sumar (3+1);


//-----------------------
//   Funcion flecha
//-----------------------
const sumar = (num1, num2)  => {
    return num1 + num2;
}

//--------------------------------
//   Funcion flecha reducida   / solo sirve si mi funcion tiene una sola linea. y esa linea es la de return
//--------------------------------
const sumar = (num1, num2)  =>  num1+num2;

```

## Truthy / Falsy

En js podemos tener un valor Truthy o Falsy.
 Un valor Truthy es aquel que se evalua como verdadero en un contexto boleano, mientras que falsy se evalua como falso.

Podemos utilizar este concepto para la toma de descisiones en nuestro codigo.

Valores falsy : `undefined, null, NaN, 0, "", false`
Valores truthy: todos los demas.


Ejemplos de valores que parecen falsy pero que son truthy:

```js 
//SON TODOS TRUTHY!!!
const val = "false";
const val =-1;
const val =" "
const val=0.1;
const val="0";
const val="null";
const val="undefined";
```
```js
Edad=19;
if (edad>18){
    //truthy
} else {
    //falsy
}

let numero =16;
if (numero%2 = 0){
    // truthy: es par
} else {
    // flasy: es impar
}

if(""){
    console.log("no me ejecutan nunca");
} else {
    console.log("si se ejecuta");
}


```
```js

const miElemento =document.querySelector("#miBoton"); // clases, ids y tags
const miElemento = docmento.getElementById("miBoton") // solo para ids
const container = document.querySelector("content");

const miInput =document.querySelector("#inputEdad");
console.log ("valor es :", miInput.value);
miInput.value="hola";

escribir dentro de una caja
miElemento.textContet="Mi texto";
miElemento.innerHTML=<h1>Mi Texto</h1>



```