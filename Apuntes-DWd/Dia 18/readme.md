# Transition CSS

Es una forma de cambiar los cvalores de una o mas propiedades de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepete valor numericos.
Por ejemplo: widht, height,  padding, color, background-color, opacity,etc.

Propiedades de numericas:
- Font-size
- Margin
- Border-wifdh
- Transform (propo como: scale, rotate, translate, etc...)

Propiedades de color:
- Background-color
- Color
- Border-color
- box-shadow

## Como se define
Utilizamos la prop `transition` y se puede personalizar de la siguiente manera:
- `Transition-property`: Nos indica la propiedad de animar.
- `Transition-duration`: duracion de la animacion (en seg),
- `Transition-timing.function`: la manera en la que se va allevar a cabo la transisicion.


``` CSS
div{
    Transition-property:font-sixe;
 Transition-property:
 Transition-timing.funtion: 
 Transition:delay;
 }

 /* al poder modificar estas 4 reglas en 1 */
/* 
 Prop desition timing-functio delay */
 Transition: font-size 4s ease-in-out 2s;


 

 https://cubic-bezier.com/#.92,.04,.14,.89....