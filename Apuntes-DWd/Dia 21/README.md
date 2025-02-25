
# variables CSS

Se pueden crear variables de CSS para reutilizat valores en diferntes partes del codigo

 - Mejora la legibilidad del código.
 - Facilita la actualizacion de valores.

 Se suelen crear de manera global en la raiz del documento, en web el root  es la etiqueta <html>, en svg es la etiqueta <svg>, ademas tiene mayor espeficidad ":root" que "html".


 [Ejemplo Booststrap] (https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variables)

```css
 :root{
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --mi-color-principal: #fff;
    --mi-color-secundario: #000;
 
 
 
 }