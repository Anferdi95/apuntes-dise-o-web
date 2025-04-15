// Muestra la sección correspondiente y carga los productos filtrados
function mostrarInfo(servicio) {
  // Oculta todas las secciones
  document.querySelectorAll('.info').forEach(section => {
    section.classList.remove('active');
  });

  // Muestra la sección seleccionada
  const seccion = document.getElementById(servicio);
  seccion.classList.add('active');

  // Cargar productos según la categoría
  if (servicio === 'bandejas') {
    cargarProductos('bandejas', 'galeria');
  } else if (servicio === 'charcuteria') {
    cargarProductos('charcuteria', 'galeriachar');
  } else if (servicio === 'tablas') {
    cargarProductos('tablas', 'galeriatab');
  }
}

// Función que filtra y muestra los productos por categoría
function cargarProductos(categoria, contenedorId) {
  fetch('../db/datos.json')
    .then(res => res.json())
    .then(data => {
      const contenedor = document.getElementById(contenedorId);
      contenedor.innerHTML = ''; // Limpiar contenido anterior

      // Filtrar productos según la categoría en habilidades
      const productosFiltrados = data.filter(item =>
        item.habilidades.map(h => h.toLowerCase()).includes(categoria.toLowerCase())
      );

      // Mostrar mensaje si no hay productos
      if (productosFiltrados.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles para esta categoría.</p>';
        return;
      }

      // Agregar productos al contenedor
      productosFiltrados.forEach(item => {
        contenedor.innerHTML += `
          <div class="card">
            <h2 class="nombre">${item.nombre}</h2>
            <img class="imagenproducto" src="./${item.avatar.trim()}" alt="${item.nombre}">
            <p class="Precio">$${item.Precio.toLocaleString('es-CO')}</p>
            <div class="clase">${item.habilidades.join(', ')}</div>
            <button class="boton_carrito">Añadir al carrito</button>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error al cargar el catálogo:', error);
      const contenedor = document.getElementById(contenedorId);
      contenedor.innerHTML = "<p>No se pudo cargar el catálogo.</p>";
    });
}

// Cargar categoría por defecto al iniciar (bandejas)
document.addEventListener('DOMContentLoaded', () => {
  mostrarInfo('bandejas');
});
