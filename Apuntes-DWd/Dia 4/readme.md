## Dia 4

## SELECTOR CSS

```CSS
/* SELECTOR DE ID */
#caja1 { 
    color:blue;
  }


/* SELECTOR DE clase */
.caja { 
    color:red;
  }
.cajaimportante {
    color: yellow;
}

/* SELECTOR DE etiqueta */
div { 
    color:green;
  }

/* selector de multiples items */
      
se separan con ","
h1,h2,h3 p {
  color:red:
}

/* selector con atributo*/
img[alt="foto 1"]{
  color:brown;
}
a[href="https://x.com/miPerfil"]{
  background:black;
  color:white;
}
div[class]


/* selector de hijos directos*/
header > nav > #logo > a { }

/* selector de todos los descendientes*/
header a li { }

/* selector del siguiente hijo*/
p + a { }

/*paginas para ver atajos*/

*seleccion con alt en windows o en mac con option y se leccionan varias lineas para abrir*

```

``` html

<header>
  <nav>
      <h1 id="logo">
        <a href="/">Mi Paágina
      <ul>
          <li><a href=">





<div class="cajaimportante" id="caja">soy un div</div>
<img src=":/img/foto.png" alt="foto1"/>
<a href="https://x.com/miPerfil">Mi Perfil en X</a>


```

# Reset CSS 
 buscamos que en todos los navegadores inicien nuestros proyectos con el mismo estilo
- [meyerweb]https://meyerweb.com/eric/tools/css/reset/
- [eduardoFierro] https://raw.githubusercontent.com/eduardofierropro/Reset-CSS/refs/heads/main/css/app.css
- [top10] https://cssauthor.com/css-reset-stylesheets/


```css
/* Reset minimo */
/* el"*" incluye a todos los elementos de la web */
/* el "borde-box" usa el borde de la caja  como ancho, en vez del contenido */

*{
  margin 0;
  padding 0;
  box-sizing: border-box;
}



```