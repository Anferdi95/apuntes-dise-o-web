# LOCALSTORAGE

Sirve para alameenar info en nuestro navegador.
La informacon se guarda segun el dominio.
Solo guarda strings (textos), si quiero guadar arrays, o objetos utilizamos JSON.
Para ello utilizamos `JSON.stringify(nuestraLista);` y para volver a tener nuestros datos en JS, usamos `JSON.parse(nuestroString);`

```js
localStorage.setItem("edad", 25); // "25"
localStorage.getItem("edad" ); // "25"  <-- texto

```

Para que se usa:
- Guardar preferencias del usuario: "modo claro/oscuro" , tamaño de fuente, si la barra lateral esta abierta...
- Recordar las desiciones de usuario, por ejemplo si ya acepto o no un mensaje de bienvenida.
- Almacenar datos sin necesidad de un servidor. Por ejemplo CARRITOS DE COMPRA!

```js

//CATALOGO.HTML
const productos = [ "producto 1", "producto 2", "producto 25"];
productos.push("producto 4");
const textoAGuardar = JSON.stringify(productos);//convierto mi array en string
localStorage.setItem("listaDeProductos",textoAGuardar);

//CHECKOUT.HTML
const textoProductos = localStorage.getItem("listaDeProductos");
const listaProductos = JSON.parse(textoProductos);



```