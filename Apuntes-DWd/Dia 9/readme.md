# Introduccción a nomemclaturas CSS Y BBM  

    Forma de nombrar nuetaras clases de CSS para mantener Código limpio y ordenado. Biscamos código comprensible, predecible y fácil de mantener.
## Nombres de variables/selectores/archivos
    - UPERCASE
    - lowercase
    - Title Case
    - camelCase:  `miClaseDeHtml`
    - PascalCase: `MiClaseDeHtml`
    - Kebab-case: `mi-clase-de-html` (se utiliza para nombrar archivos) 
    - snake_case: `mi_clase_de_html` 

   ## Nomenclatura BEM (Block-element-modifier)

  - [BEM](https://getbem.comnaming)


## Para qué?

  1. Comunicar un proposito o función.
  2. comunicar la estructura del componente.
  3. Marca una espeficidad baja consistente en la estructura de la página.

![Specificity](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkerupv5p9lu9k10w5l1.png)
  

  Su nombre es en "Kebab-case" separando __ para elemntos y -- para modificadores.
  Elemplo
  -[bloque]__[elemento]--[modificado]
  
  El bloque de clase BEM posee 3 partes


1. **Bloque**: El nombre del componente, el cual por si solo tiene sentido: card, header, container, buttom, footer, menu
2. **Elemento**: Dentro de un bloque puede haber uno o mas elementos. Estas partes no tienen sentido pormsi solor ;"menu item", "list itenm", checkbox label,çç "header tittle.
3. **Modificador**: Una variación o estado diferentes para unbloque o elemnto. Que cambia la apariencia o comportamiento del mismo. "xmas", disabled, highlighted, checked, "sixe big""color yellow"

`<div class="foote" footer-red></div>



    <div class="tarjeta
        <ul>
            <li class="li"></li>
        </ul>
    </div>
    