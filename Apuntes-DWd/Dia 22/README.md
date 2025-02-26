
## JavaScript

Es un lenguaje de progrmacion de alto nivel, es interpretado y orientado a objetos.
Lo utilizamos para crear contenido dinamico e interactivo en sitios web.

- "Alto nivel": Esta diseñado para ser facil de leer y escribir por humanos.
- "Interpreyado": Se ejecutan en tiempo real,linea por linea y NO necesita ser compilado.

```js 
let numero = 1;
console log("linea 1 y número vale 1 ", numero);
//Imprime en cosola el texto Linea 1  numero vale: 1
numero = numero + 2;
console.log("linea2 y numero vale ", numero);
//Imprime en consola el texto   Linea 2 y numero vale : 3
``` 

Orientado a Objetos

Js utiliza un paradigama (OOP - Objet Oriented Programing), significa que organiza su código en "objetos". Un objeto es una colecccion de `proopiedades` (caracteristicas) y `metodos`(funciones que se pueden leer y manipular).

Perro
//Propiedades
- color:blanco y negro
- nombre: lasie
//metodos
-lasdren()
moveeLaCola()


```js
//Ejemplo de propiedades y metodos
const alumno = {
    nombre:"Lucia perez",
    edad: 35,
    //hobbies: ["futbol", "progrmar", "leer"]

    saludar: function(){
        Console.log("hola, mi nombre es lucia")
    }
}
//Para imprimir el nombre del alumno usamos algo como:
console.log(alumno.nombre);

console.log("me llamo", alumno.nombre, "y tengo ", alumno.edad, "años")
//Me llamo Lucia Perez y tengo 35 años

//Para ejecutar un metodo/funcion tenemos que usar () al final.
alumno.saludar();

```

## donde podemos probar /codificar con JS

- En el navegador: en la pestaña de consola.
- En etiquetas de <scrip> dentro del HTML y se suelen poner al final antes de cerrar el </body>
- Se pueden usar archivos externos con la extencion `.js` linkeando en nuestro html <script src="./jsmiscript.js"></script>
- Usar extension de de VSC ->  Quokka. Para emepzar usar: "comand+p" ">Quokka"
- Usar paginas externas

1. https://playcode.io/
2. https://codepen.io/  ***
3. https://jsfiddle.net/

# Funcionalidaes 
- `Manipulacion del DOM:` (Document Objet Model):Agregar, modificar o quitar elementos HTML y CSS.
- `Procesar Formularios:` Verificar datos ingresados por el usuario, y realizar formularios complejos de multiples secciones.
- `Manejo de animaciones:` manupular objetos visuales y animaciones en nuestra web
- `Manejo de eventos:` mResponer a las acciones del usuario, como por ejemplo: Hacer click, Mover el mouse, Desplazarse por la web...
- `Comunicacion asincrona con servidores mediante AJAX/FETCH:` Enviar y recibir datos de un servidor sin teber que recargar la página.

## Tipos de Datos

- `Numeros:` Enteros, decimales, positivos, negativos, etc.
- `Cadenas de textos (strings):` Textos, palabras, frases, 1letra. Entre comillas 'simples', "dobles", ó `backticks`.

- `Booleanos`:  verdadero o falso.
`Listas de cosas (arrays)`: Se escriben con corchetes [] y los items se separan con ,(coma).
`Objetos (Object)`: Coleccion de propiedades (caracteristicas) y metodos(funcionalidades), se escriben con { } 


```js 

//PRIMITIVOS
let texto = "Hola alumnos de CEI";
let textoConComillas= 'Hola estoy muy "bien" ';
let textoConComillasDobles= "I'm Andres";
let texto= `Quiero comillas 'simpres' y "dobles"`; // template string (plantilla)

let numeros = 123
let numeros2 = "123"; // "123"
numero2= Number(numero2); // 123

let entero = 25;      // Numero entero
let decimal = 22.30;  // Numero decimal
let negativo = -5;
const PI (π) = 3.14159;

let estaPrendido = false;
let isPrimary = true;
let onActive = false;



//REFERENCIALES


// Objeto
const alumno = {
    nombre: "Andres",
    edad 29,
    isRecibido: false, 
    presentarProyecto: function() {
        // this es para referisse a ESTE objeto
        this.isRecibido = true;
       this.edad = 30;

    },
    irseDeVacaciones: function(){ ...  }
}

alumno.edad; // 33
alumno.presentarProyecto(); // presenta el proyecto


// Como escribir en un objeto
alumno.edad = 34;

// Listas o ARRAYS 

const alumnosDeDW = ["jhon", "maria", "andres", "sonia", ...];
const edades = [ 25, 32, 18, 49];
const listaMixta = [
                         1,
                         "Juan",
                         true,
                         {val1: "hola", val2: "chau"}
                    ];

//Las listas comienzan por 0
console.log( alumnosDeDW[0]  ) // " Jhon " ;
console.log( alumnosDeDW[1]  ) // " maria " ;
console.log( alumnosDeDW[2]  ) // " andres " ;

// Para escribir un valor en una lista
alumnosDeDW[0] = "Jhon Edwar"
console.log( alumnosDeDW[0]  ) ;//"Jhon Edwar";





```
`Ejercicio 1: Creación y acceso a arrays`
- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
- Imprime en la consola el primer elemento del array frutas.
- Cambia el segundo elemento del array frutas a "Mango".
- Imprime en la consola el array completo para verificar el cambio.

```js


const frutas =["Manzana", "Banana", "Naranja"];     // crear array
console.log(frutas[0]);                             // imprimir primer elemento
frutas[1]= "Mango";                                 // cambiar el segundo elemento
console.log( frutas );                              //imprimir en consola

```


`Ejercicio 2: Creación y acceso a objetos`
- Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
- Imprime en la consola el valor de la propiedad nombre del objeto persona.
- Cambia el valor de la propiedad edad a 30.
- Imprime en la consola el objeto persona completo para verificar el cambio.

```js
const persona = {
    nombre: "Andres",
    edad: 29,
    ciudad: "Valencia",
}
console.log(persona.nombre);
persona.edad = 30;
console.log(persona);

``` 




`Ejercicio 3: Arrays de objetos`
- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
- Imprime en la consola el nombre del segundo estudiante.
- Cambia la nota del primer estudiante a 95.
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.

`Ejercicio 4: Métodos en objetos`
- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.


