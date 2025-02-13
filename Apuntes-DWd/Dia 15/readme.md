 # CSS GRID 

Grid es un sistema de maquetación bidimensional para crear interfacesy layouts tipo tablas.
Se compone de filas y colomnas y se pueden anidar uno denntro de otros.
Se pueden crear layouts complejops con muy pocas lineas con código.

- Nos sirve para crear layouts.
- No es opuesto a Flex, se pueden combinar entre ellos.
- Grid si sustituye  a las <tables> par armado de layouts.

Utilizamos `display:grid` para crear un grid y `grid-template-columns`y `grid-template-rows` para definir el número de columnas y filas.

```css
/* layour de 3x3 */
.container{
    display: grid;
    grid-template-columns: 10px 100px 100px  ;
    grid-template-rows: 10px 100px 100px  ;

}

```

Pueden visualizar el layout de GRID desde la consola de chrome.

Podemos indicar a cada item, donde pocicionarlo usando `grid-row-start`, `grid-row-end`, `grud-column-start` y`grid-column-end`, teniendo en cuenta que las filas y columnas empiezan en 1 y (no en 0).
 si uqeremos que pocupe 3 columnas y 1 fila debemos indicar que comience en la columna 1 y termine en la columna 4, y que la fila comience en 1 termine en 2.

``` css
.item-1{
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: darkgreen;
}
```

se pueden invertir el start y el end y funcionara igual.
``` css
.item-1{
    grid-column-start: 4;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 1;
    background-color: darkgreen;
}
```

se poueden utilizar valores negativos para seleccionar elemetnors desde el fnal y de grid.
``` css
.item-1{
    grid-column-start: -1;
    grid-column-end: -4;
    grid-row-start: -1;
    grid-row-end: -2;
    background-color: darkgreen;
}
```
en vez de seleccionar la fila o la colman de destino, podemos utilizar "pan" para indicar cuantas filas o columnas queremos que termine el item.
``` css
.item-1{
    grid-column-start: 1;
     grid-column-end: span 2; /*se amplia un bloque mas */
    grid-row-start: 1;
    grid-row-end: span 3;/*se amplia dos bloque mas */
    background-color: darkgreen;
}
```

Para reducir grid-colum-start y grid-colum-end en una sola linea, para usar `grid-column`. lo mismo con`grid-row`.
``` css
.item-1{
    grid-column: 1/3;    /* col start / end */
    grid-row: 2/4        /* row start / end */
    background-color: darkgreen;
}
```
Podemos utilizar una forma aun mas corta usando `grid-area`donde definimos`grid-row-strart`, `gris-colum-start`, `grid-row-end`, `grid-column-end`, 
```css
.tem-2{
    grid-area: 1 / 1 / 4 / 4; 
}
```
Con grid es muy simple crear un elemento encima de otro.

Podemos utilizar en el comtainer  `grid-gap` para definir un espacio entre las colunas y filas.
El mismo soporta un valor para fila y columna. o podemos poner 2 valores para difewrenciarlo 
```css
/* layour de 3x3 */
.container{
    display: grid;
    grid-template-columns: 10px 100px 100px  ;
    grid-template-rows: 10px 100px 100px  ;
    grid-gap: 10px; /* Sparacion entre filas y columnas */
    grid-gap: 1em 3em; /* Sparacion independientes para filas y columnas */
}

```


Existe la opcion `repeat( )` que nos permite repetir el numero de ves que quiero para una fila o columna
```css
/* layour de 3x3 */
.container{
    display: grid;
    grid-template-columns: repeat( 3, 100px)  ;
    grid-template-rows: repeat( 3, 3em) ;
    grid-gap: 10px; 
    }

```

Si agregamos mas bloques dentro de nuestro grid, se intenara ubicarlo en la primer posicion libre disponible, si no quedan posiciones libres, se creara una nueva fila,Esta nueva celda no temdra el tamaño asigando en nuestro `grid-template`, y se llamaran `"grid-implicitas"`. Podemos usar `grid-auto-rows:100px` para  definir el tamao de nuestras nuevas filas.
Tambien existe el `grid-auto-flow`que nos permite definir si las nuevas celdas se cerraran como filas o columnas.
```css
/* layour de 3x3 */
.container{
    display: grid;
    grid-template-columns: repeat( 3, 100px)  ;
    grid-template-rows: repeat( 3, 3em) ;
    grid-gap: 10px; 
    grid-auto-rows: 100px;
    grid-auto-flow:column;
    }

```
lAS UNIDADESQUE PODEMOS UTILIZAR SON PX, %, em, rem, pero se le suma una nueva de valor fraccional, o `fr`. Este valor nos permite fraccionar el tamaño disponible.
Por ejemplo, si tenemos 3 columnas y definimos que la primer columna tenga el tamaño de 1fr, la segunda de 2fr y la tercera de 1fr, la segunda ocupara el doble del espacio que la otras 2.

```css
/* layour de 3x3 */
.container{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr  ;
    grid-template-rows: repeat( 3, 3em) ;
    grid-gap: 10px; 
}

``` 

pagina para hacer pruebas de grid 

`https://cssgridgenerator.io/`
