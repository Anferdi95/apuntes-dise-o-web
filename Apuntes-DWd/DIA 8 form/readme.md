# Día 8

- Los formularios utilizan las etiquetas envolventes <form>
- Utilizamos etiquetas <input> para ingreasar datos. Algunos tipos (`type`) de ellos eran: radio, checkbox, text, email, password, submit.
- Todos los inputs Requieren EL ATRIBUTO `name`para envar la información. Este debe ser único, excepto <input type="radio>
- Utilizamos otras etiqueras para algunos tipos de datos, por ejemplo <textarea>, <selec> + <option>.
- Los input suelen estar acompñados de un <label> como descripcion- 

## Métodos de GET y POST para enviar información

- GET es visible en la url y POST utiliza el cuepo de la petición.
- GET tiene un limite de 2048 caracteres y POST no( se utiliza para enviar informacón) de mayor tamaño, incluyendo el ipload de archivos.
- Normalmente Get  se utiliza para obetener información y POST para enviarla.


Ejmeplos de formualarios con GET:
- Buscadores 
- filtros 
- paginación

Ejmeplos de formualarios con POST:
- Formulario de contacto
- Formulario de Login/Registro
- Formulario de Pago

<!-- Hacer un `login-form.html` sin estilos enviando informacion al atributo action=""
Utilizar "labels! y eque el suaurio y clave sean obligatorios


-Investigar los siguientes Types, Explicar que hacen y crear un ejemplo en `otros-inputs.html`. "number, color, date, file, reset, hidden, range". -->

esto es solo para cuando tenemos un formulario que hace upload/carga de archivo
<form  method="POST" enctype="multipart/form-data">
    <input type="file">
    </form>

   -  Nuevas etiquetas/types tel, url, search, time, week, month, datetime-local


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

    <div class="tarjeta
        <ul>
            <li class="li"></li>
        </ul>
    </div>
    