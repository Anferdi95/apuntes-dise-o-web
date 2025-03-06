# Manipulación de textos
1. Concatenar
```js
 const nombre = "Lucia";
 const apellido = "Perez";
 // Con interpolación //
 const FullName = `${apellido}, ${nombre}`; // Perez, Lucía
 const nombreCompleto = nombre + apellido; // LucíaPerez
 const nombreCompleto = nombre + " " + apellido; // Lucía Perez
 const fullName = apellido + "," + nombre // Perez, Lucía
 // Concatenar usando +=
 let saludo = "Hola, ";
 saludo += "¿Cómo estás?";
 console.log(saludo); // Hola, ¿Cómo estás?



 divListaDeProductos.innerHTML += "<li>item 1</li>"
```

<!-- El "+=" sirve para añadir más cosas -->
<ul id = "ListaDeItems">
 <li>item1</li>
 <li>item2</li>
</ul>




2. Interpolación
Cuando usamos plantillas literales (`template literals` / `template strings`), se
pueden insertrar `variables` o `expresiones` dentro de una cadena de texto
usando `${}`.


```js
 let nombre = "Ana";
 let edad = 25;

 // Interpolación
 let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`; 
 // Hola mi nombre es Ana y tengo 25 años.


 // Concanetación
 let mensaje = "Hola, mi nombre es "+ nombre +" y tengo "+ edad + 1  + " años."; 
 // Hola mi nombre es Ana y tengo 25 años.

 const mensaje = edad + 1;              // 26 
 const mensaje = edad + 1 + "años" ;    // 251 años
 const mensaje = (edad + 1) + "años" ;  // 26 años



 // Insertar expresión
 const total = 50:
 const iva = 0.21;
 console.log(`El total con impuesto es ${ total + (total*iva) }`);
 // Esto es una lista
 const hobbies = ["futbol", "basquet", "programación de Javascript"];
 // Cualquier texto es una lista de letras
 const texto = "El total con impuestos";
 ["E", "l", " ", "t", "o", "t", "a", "l" ....];

const msg = "hola como etsas";
console.log(msg[0]); // "h"
console.log(msg[1]); // "o"
console.log(msg[3]); // "l"
```


3. Métodos de Strings

JS nos ofrece multiples métodos / funciones para manipular cadenas de texto.

- `toUpperCase()`y `toLowerCase()`, convierte todas las letras de una cadena
en mayúsculas o minúsculas.
```js
 let texto = "Me encanta Javascript";
 // toUpperCase() , toLowerCase()
 console.log (texto.toLowerCase()); // me encanta javascript
 console.log (texto.toUpperCase()); // ME ENCANTA JAVASCRIPT
```


- `split()` Divide una cadena de texto en una lista / array basada en el
separador elegido.
```js
 let texto = "Me encanta Javascript";

 const palabras = texto.split(" ");
 console.log(palabras); // ["Me", "encanta", "Javascript"]

 const palabras2 = texto.split("encanta");
 console.log(palabras2); // ["Me", "Javascript"]

 const email = "maria@alumnos.cei.es";
 const separacion = email.split("@");
 console.log(email); // ["maria", "alumnos.cei.es"]



```



- `slice()` Extraer una porción de la cadena basada en índices de inicio y fin
(sin incluir el índice final).
```js
 let frase = "Aprender javascript es divertido";
 console.log("Parte de la frase: ",frase.slice(9,19)); //javascript
 console.log("Desde el indice 9 al final: ", frase.slice(9)); // javascript es divertido
```



- `replace()` Reemplaza una parte de la cadena por otra (La primera ocurrencia
lo va a reemplazar). Soporta expresiones regulares (regex) para potenciar la
búsqueda,
```js
 let frase = "Hola mundo. hola hola hola hola universo";
 console.log("Reemplazar `hola` por `Hola`: ", frase.replace("hola",
"Hola")); // Hola mundo. Hola hola hola hola universo
```



- `replaceAll()` cambia todas las instancias en las que encuentre esa opción
```js
 let frase = "Hola mundo. hola hola hola hola universo";
 console.log("Reemplazar `hola` por `Hola`: ", frase.replaceAll("hola",
"Hola")); // Hola mundo. Hola Hola Hola Hola universo
```


- `trim()` Eliminar todos los espacios en blanco al inicio y al fin de la cadena.
```js
 let frase = " hola mi nombre es Luka ";
 //ideal para <textareas>  y para forms
 console.log(frase.trim()); // Hola mi nombre es    Luka
```



- `includes()` Verifica si una cadena contiene una subcadena específica.
```js
 let frase = "El sol brilla en el cielo";
 console.log("Contiene 'sol'?" + frase.includes("sol")); // true
 console.log("Contiene 'luna'?" + frase.includes("luna")); // false
```




- `startsWith()` y `endsWith()` Verifica si una cadena comienza o termina con
una subcadena específica.
```js
 let frase = "Javascript es genial";
 console.log("¿Empieza con 'Java': ", frase.startsWith("Java")); // true
 console.log("¿Empieza con 'Java': ", frase.startsWith("java")); // false
 console.log("¿Termina con 'genial'?: ", frase.endsWith("genial")); // true
```




- `repeat()` Repite un número específico de veces.
```js
 let risa = "Ja";
 console.log("Me causa mucha gracia: ", risa.repeat(3)); // JaJaJa
 let frase = "HolaComo Andan?";
 console.log(frase.length); //15
```
Podemos combinar métodos
```js
 let frase = " No me gusta Javascript en diseño web ";
 //trim (), toUpperCase(), replace()
 let resultado = frase.trim()
 .replace("No me gusta", "Me encanta")
 .toUppercase();
 // ME ENCANTA JAVASCRIPT EN DISEÑO WEB
```