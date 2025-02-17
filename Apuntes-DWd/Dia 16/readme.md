# BEM(Block, element, modifier)

# Suite CSS
- Block --> Componente
- Element --> Elemento
- Modifier --> Modificador

Nuevos

- Utilities
- Estados

## Utilities
Se escribe con una `u-utilityName`por ejemplo `u-red`
- Se escribe con u-camelCase
- Se utiliza para aplicar un estilo a cualquier elemento

``` CSS
 .u-red{
    background-color: red;
    color:white;
 }

 .u-big{
   font-size: 5rem;
 }

  .u-sm-text{
    /* Texto pequeño (small)*/
 }
  .u-md-text{
    /* Texto pequeño (medium)*/
 }
 .u-sm-text{
    /* Texto pequeño (large)*/
 }

 ```
# Componente

Igual al bloque de BEM, pero se escribecon pascalCase. Por ejemplo `Header`, `MiBoton`, `SecctonHero`

# Elementos (Part, DescendentName)

Igual que el element en BEM, pero se escribe con camelCaase. Por ejemp `Header-tittle`,`Card-ImageFront`,`Tweet-BoqdyImage`

```html
<article class="Tweet">
    <header class="Tweet-header">
        <img class="Tweet-headerImg"  src="./img/mi-foto-png" alt="">
        ....
        </header>
        <div class="Tweet-bodyText">
            ....
            </div>
</article>
```
# Modificadores

Al igual que BEM. se utiliza con camelCase `Componente--nombreModificador`

```html
<button class="Button"> Boton normal </button>
<button class="Button Button--navidad"> Boton normal </button>

```

## Estados

Nuevo: Clases para elementos que marcan el estado de un COmponente/elemento.
Se escribe con camelCase y usa la palabra `is-` delante.

```CSS
.Tweet{
    /*estilos con tweet comun*/
}
ç.Tweet.is-expanded {
    /*solo cambios para el twwet abierto*/
}
```

```html

<article class="Tweet">
    ....
 </article>
<article class="Tweet is-expanded">
    ...
</article>


```

# Grid continuaciòn (2/2)

Existe ka opcion minmax() que nos permite definir un tamaño minimo y maximo para las columnas y las filas.

```CSS
.container{
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;
}

```

# Grid Template Areas
Podemos nombrar  las celdas utilizando `grid-template-areas`y asignando un nombre a cada una:

```css

.container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap: 10px;
    grid-template-areas:
    " header header header"
    " sidebar main main "
    "footer footer footer"
}

.tem-1{
    grid-area: header;

}
.tem-2{
    grid-area: main;

}
.tem-3{
    grid-area: sidebar;

}
.tem-4{
    grid-area: footer;

}
```

Podemos utilizar `justify-content`y `align-items` para alinear los elementos dentro de las celdas. SUS OPCIOES POSIBLES SON: start, end, center, stretch y baseline. Por defecto se aplica stretch.

```css

.container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap: 10px;
    justify-content:start;
    align-items: end;
}
```

Podemos decirle a un item especifico que se alinee de manera diferente utilizando `justify-self`y `align-self`.Sus opciones son start, end, center, stretch y baseline.

```css
.item-1{
 justify-self:center;
  align-items: stretch;

}
```

Podemos alinear nuestro grid en base de su contenedor utilizando `justify-content`y `align-content`
Sus opciones son start, end, center, stretch,space-around,
space-between y space-evenly.
```css

.container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap: 10px;
    justify-content:start;
    align-items: center;
}
```
Podemos crear un grid responsive con el uso de `auto-fit`. Esto nos permite que los elementos se ajusten al tamaño del contenedor.
```css

.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(4,1fr);
    grid-gap: 10px;
}
```