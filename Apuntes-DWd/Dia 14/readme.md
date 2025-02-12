# Unidades de medidas en CSS: px, %, em, rem.

## PIXEL

Son unidades absolutas que representan un ounto en pantalla. Son ideales para tamaños y dimensiones precisos que no deben cambiar en relación con otros elementos. Es recoendable usarlo para los bordes, umágenes  otros eleemntos de dimensiónfija.

## PORCENTAJE "%"
Es una relativa al tamaño del elemnto padre.Ejemplo: el padrees de 200 px y el elemento tien un width de 50%, el ancho del onbjeto será de 100 px. Esta medida es útil para dsiseños fluidos y responsive que se adapten al tamaño de pantalla .Es recomendable para ontenedores que varien según su contnedor?

## EM "em"

La "unidad" em es relativa al tamaño de la fuente del elemento padre (o el suyo). Por ejemplo si el pádre tiene un `font.sixe:10px;` y un `margi: 3em;`el margen sera de 30 px. Esta unidad es útil para crear tamaños de texto y márgenes que escalen con el tamaño de la fuente.
Esto mejora la accesibilidad y flexibilidad del diseño.
Por defecto los navegadores asignan el font.sixze inicial a 16px

```css
    .card{
         FONT size: 1em; 
         padding: 1.5em;
    }
```
## REM (Root EM)
Es relativa al tamaño de la fuente de la Raiz del dcimento(Normalmente es <HTMNL>). Por ejemplo, si el tamañode la fuentre de HTML es de 8 px, y un elemento desendente en varios niveles tienen una metida de 3 rem su medida sera  de 24 px. Rem es util para mantener una escala consistente en todo el documento, independientemente de la estructura del DM. es recomendable  usar rem para tamaños globales, como el tamaño de la fuente principal y los margenes, para garantizar coherencia en todo el sitio. 

```css
html{
    font-size: 16px;
}
.card{
    font-size: 2em; /* 32px */
}
.card__title{
   margin: ;
}
