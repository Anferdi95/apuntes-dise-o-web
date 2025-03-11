
# METODOS DE ARRAYS / LISTAS

## Pop ()
El metodo `pop()`, elimina el ultimo elemento de un array, y lo devuelve.
Este metodo modifica la laongitud array.

```js 
let frutas= ["manzana", "naranjas", "tomate", "uvas", "bananas",];
let ultimoElemento=frutas.pop();

console.log(frutas); //(4) ["manzana", "naranjas", "tomate", "uvas"];
console.log(ultimoElemento);//"bananas"

```

## Push()
El metodo `push()`, es uno de los mas comunes, añade uno o mas elementos al final de un array. me devuelve la nueva longitud del array.

```js
const frutas=["manzana", "naranja"];
let nuevaLongitud = frutas.push("pera", "tomate", "sandia");

console.log(frutas); // (5) ["manzana", "naranjas", "pera", "tomate"];
console.log(nuevaLongitud); //5

```

## Shift ()

El metodo `shift()`, elimina el primer elemento del array, y lo devuelve. Este metodo modifica la longitud del array.

```js
const frutas=["manzana", "naranjas", "tomate", "uvas", "bananas",];
let elementoQuitado =frutas.shift();

console.log(frutas); //[ "naranjas", "tomate", "uvas", "bananas",];
console.log(elementosQuitado); // "manzanas"

``` 

## Unshift ()

El metodo `Unshift()`, añade uno o mas elementos al inicio del array, devuelve la nueva longitud del array.

```js
const frutas=["manzana", "naranja", "tomate"]; // (5) ["pera","ciruela","manzana","naranja,"tomate"];
let nuevaLongitud= frutas.unshift("pera", "ciruela"); // 5

```

## Splice()

El metodo `Splice()`cambia el contenido de un array, eliminando, creando o remplazando sus elemntos. Modifica el valor original y recibe 3 parametros.
devuelve los elementos eliminados

- El indice del vector donde se va a realizar la operacion.
- La cantidad de elementos a eliminar
- Los elementos que quiero agregar

```js

const frutas=["manzana", "naranjas", "tomate", "uvas", "bananas",];
let frutasEliminadas =frutas.splice(2,2, "pera", "ciruela");


console.log(frutas); //5 ["manzana", "naranjas", "pera", "ciruela", "bananas"];
console.log(elementosQuitado); // "tomate", "uvas"
```


EJERCICIOS DE SPLICE();
```JS
let lenguajes=["phyton","java","javascript", "php","c++", "c#" ];
lenguajes.splice(0,1); // eleimino el primer valor "phyton" como shifth
lenguajes.splice(-1, 1); //elimina el ultimo valor del array (pop)
lenguajes.splice(-1, 0 "C", "Cobol");//  se posicoona al final no borra y adicona  ["phyton","java","javascript", "php","c++", "c#" ,"C", "cobol"];


// quitar 2 elementos apartir del indice 2
lenguajes.splices(2,2);

```

## ForEach
El forEach reccore cada elemnto de una lista, y ejecuta la fucnon indicada dentro del mismo.

```js

["a", "b", "c"].forEach((letra)=>{
    console.log(letra);
})
```

## Map
Devolver el doble de cada elemnto-;

```js
const listaNumeros =[5,15,7];
listaNumeros.map ( (num)=>{
    return num * 2;
});
console.log(listaNumerosDobles);//[10,30,14]

```


```js

//------------------------------------------------------//
// otra forma de ver el mismo codigo  // asincrono 3
//------------------------------------------------------//
const listaNumeros = listaNumeros.map ( (num)=>{
    return num * 2;
});

//se puede optimizar cuando nuestra funcion
//tiene una sola linea, y esa linea es un return

const listaNumeros = listaNumeros.map (num=> num*2);
//------------------------------------------------------//

```

## Buscar Item

El metodo`find()` devuelve el PRIMER elemnto del ARRAY que cumpla la funcion de prueba proporcionando. En caso caontrario devuelve undefined

```js
const numeros=[5,12,8,130,44,12];
const item =numeros.find (num =>>10);
console.log(item);//12
```

## Buscar multimples Items

La funcion `filter()`devuelve un array con TODOS LOS ELEMENTOS que cumplan la condicion especficada.

```js
const numeros=[5,12,8,130,44,12];
const listItems = numero.filter(num=> num >10);
console.log (listaItems); /[12,130,44,12]

```
```js
const personas=[
    {nombre: "Juan", edad:33},
    {nombre: "Pedro", edad:18},
    {nombre: "Ana", edad:15},
    {nombre: "Luis", edad:9},
    {nombre: "Maria", edad:30}
    ];

    // obtener una lista de las personas mayores de edad
const listMayores= personas.filter(persona=>persona.edad >= 18);

console.log(listaMayores);
[
    {nombre: "Juan", edad:33},
    {nombre: "Pedro", edad:18},
    {nombre: "Maria", edad:30}
    ]
```

1. De una lista de numeros devolver solo los Impares.  //numero% 2 == 1

```js
const numeros =[1,2,3,4,5,6,7,8,9];
const numerosImpares =numeros.filter(num=>num%2==1);
console.log(numerosImpares);
```


2. De una loista de Personas imprimir su nombre.
cont Personajes =[
    {nombre: "Juan", edad:33},
    {nombre: "Pedro", edad:18},
    {nombre: "Maria", edad:30}
    ]

```js
cont Personajes =[
    {nombre: "Juan", edad:33},
    {nombre: "Pedro", edad:18},
    {nombre: "Maria", edad:30}
    ]
    const listaNombres = Personajes.map(persona =>{
        console.log(persona.nombre);
    });

```


3. Encuenta un libro con el titulo especifico(buscar "La Odisea")

```js
const elLibroBuscado= librops.find(libro =>   libro.titulo=='la Odisea');

```
3b. Usar los metosdo de string para busquedas parciales "cien años"



const libros =[
    {titulo: 'El Quijote', autor :'Miguel de Cervantes'},
    {titulo: 'Cien años de soledad', autor :'Gabriel Garcia Marquez'},
    {titulo: 'La Odisea', autor :'Homer'}
]



4. Dado una lista de numeros desordenados, ordenar de menor a mayor (investigar)