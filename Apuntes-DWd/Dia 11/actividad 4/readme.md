# Que es una Media Query (MQ)

- Declaraciones en CSS que nos permite definir que relgas aplicar a parti de unas reglas asignadas por nosotros.

# Sintaxis de una MQ

Una media query se compone de las siguientes partes:
- Un @media la cual es una palabra reservada [Keyword]
- Un tipo de media (screen, print, all speech)[Media Type]
- Operadores (and, not, only) [Operators]
- Breakpoints una condición (max-width, min-width, etc)
-  Un bloque de CSS (nuestras reglas CSS)


```css

/*Keywords MediaType     Operador/es      (Breakpoint)    */
/* @media sreen          and              (Breakpoint) { }  */

@media not|only|"" screen and|or (min-width: 600px) {


body{
    background-color: lightblue;
}
h1 {
    color:red;
}
}

/* Combinar Breakpoints */
@media screen and (min-width: 600px) and (max-width:800px) {
    body { background-color: lightblue; }
}

/* cuando la pantalla esta horixontal  / vertical seria portrait*/
@media screen and (orientation: landscape){
    body { background-color: lightblue;}
}

/* modo oscuro */
@media creen and( prefers-color-schema: dark){
    body { background-color: darkgray;}
}

```

### Media Types (screen/print)

- all: todos los dispositivos
-  print: Material de vista previa de impresión
-  screen: pantallas a color (tables, movil, computadora)


- speech: dispositivos de conversión de texto a voz.
- otros: pueden aparecer types DEPRECIATED tv, handheld, speech, braile, etc... (no van mas a partir de css3)

Ejemplos de impresión:
```css

@media print{
    .no-te-imprimas{
        display: none !important;
    }
}
```

### Tips para utilizarlos:

- Sobreescriben las reglas de css normales, pero no posee una mayor especifidad por lo tanto la media queries deben estar por debajo de las reglas que quiera remplazar.
- Deben tener el mismo selector para que reemplace las reglas que deseamos. Como excepcion podemos utilizar las regla principales en vez de especificas (Background) para reemplazar background-color
- Pensar bien los breakpoints
- Podemos utilizar un @media para cada selector, o una sola para todos los selectores (recomendado)

- Mobile First!!!

## Mobile First
Intentamos desarrollar  siempre primero para el movil,  luego para pantallas mas grandes. De esta manera nos aseguramos de que se vea bien en dispositivos Móviles.


- Móbile: (55%): 320px - 480px
- Tablets (2%): 768px - 1024px
- desktop (43%): 1024px - 1920px


```css

/* Tablet */
@media only screen and (min-width:768px) {

}
/* Desktop */
@media only screen and (min-width:1024px) {
    
}
```

# Ejemplo de Media queris en Imagenes (Usando Picture)

# Utilizarlo en HTML    
Podemos utilizar los MQ directamente  en nuestro html con el atributi "media". Antws que nada, debemos asegyrar que exusta la etiqueta menta viewport en el head.

`<meta name="viewport content=" whith=device-width,initial-scale=1.0" > `

EJEMPLOS NO RECOMENDADOS:

`HTML
 <link rel="stylesheet" media="sscreen and(main-widtgh)" href="./CSS/estilos.css">



```html
<picture>
        <source media="(min-width:650px)" srcset="./img/grande.jpg">
        <source media="(min-width:450px)" srcset="./img/mediana.jpg">
        <img src=":/img/foto-pequenia.jpg" alt="Mi mascota">
        
</picture>

```
## Trucos para un buen responsive

- Utilizar medidas relativas (8%, VW, wh, em,rem) [TRATAR DE NO USAR PX]
- No utilizas etiquetas de higth

## Comprobacion de nuestro Responsive + Medias Queries

- Utilizar el isnpector de elemntos de google chrome
- Probarla en nuestro propio dispositivo 
- Usar el App [Https](https://responsively.app) para probar pantas distintas

Tomás Sánchez
20:27
## Links de Interés

[CSS MQ w3Schools](https://www.w3schools.com/css/css3_mediaqueries.asp)
[Responsive Design w3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
[Responsive Design MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
[SCSS + MQ](https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/)



