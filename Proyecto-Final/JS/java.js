document.addEventListener('DOMContentLoaded', function() {
    // Array para almacenar los productos
    let productos = [];
    let productosAleatorios = [];

    // Función para cargar el JSON
    fetch('./db/datos.json')
        .then(response => response.json())
        .then(data => {
            productos = data; // Guardamos los productos
            mostrarProductosAleatorios(); // Mostramos los 3 productos aleatorios al inicio
        })
        .catch(error => {
            console.error('Error cargando el JSON:', error);
        });

    // Función para formatear el precio en pesos colombianos
    function formatoPrecio(precio) {
        const formato = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0 // Evita los decimales si no los necesitas
        });
        return formato.format(precio);
    }

    // Función para mostrar 3 productos aleatorios
    function mostrarProductosAleatorios() {
        // Seleccionamos 3 productos aleatorios
        const nuevosProductosAleatorios = obtenerProductosAleatorios(3);

        // Si los productos aleatorios son los mismos que los anteriores, no hacemos nada
        if (JSON.stringify(nuevosProductosAleatorios) === JSON.stringify(productosAleatorios)) {
            return; // Evita cambios innecesarios
        }

        productosAleatorios = nuevosProductosAleatorios;

        // Limpiamos el contenedor
        const contenedor = document.querySelector('.cards-container');
        
        // Verificamos si el contenedor existe
        if (contenedor) {
            contenedor.innerHTML = '';

            // Mostramos los productos seleccionados
            productosAleatorios.forEach(producto => {
                const div = document.createElement('div');
                div.classList.add('card');
                
                div.innerHTML = `
                    <img src="${producto.avatar2}" alt="${producto.nombre}" class="imagenproducto">
                    <h3 class="nombre">${producto.nombre}</h3>
                    <p class="Precio">${formatoPrecio(producto.Precio)}</p> <!-- Aquí formateamos el precio -->
                    <p class="clase">${producto.habilidades}</p>
                    <button class="boton_carrito">Añadir al carrito</button>
                `;
                
                contenedor.appendChild(div);
            });
        } else {
            console.error('Contenedor con id "muestras" no encontrado.');
        }
    }

    // Función para obtener productos aleatorios
    function obtenerProductosAleatorios(cantidad) {
        const indicesAleatorios = [];
        while (indicesAleatorios.length < cantidad) {
            const indice = Math.floor(Math.random() * productos.length);
            if (!indicesAleatorios.includes(indice)) {
                indicesAleatorios.push(indice);
            }
        }
        return indicesAleatorios.map(indice => productos[indice]);
    }

    // Event listeners para las flechas
    document.getElementById('flecha-izquierda').addEventListener('click', () => {
        alternarProductos("izquierda");
    });

    document.getElementById('flecha-derecha').addEventListener('click', () => {
        alternarProductos("derecha");
    });

    // Función para alternar los productos cuando se hace clic en las flechas
    function alternarProductos(direccion) {
        if (direccion === "izquierda") {
            // Rotar los productos hacia la izquierda
            productosAleatorios.push(productosAleatorios.shift());
        } else if (direccion === "derecha") {
            // Rotar los productos hacia la derecha
            productosAleatorios.unshift(productosAleatorios.pop());
        }

        // Mostrar los nuevos productos
        const contenedor = document.querySelector('.cards-container');
        
        // Verificamos si el contenedor existe
        if (contenedor) {
            contenedor.innerHTML = '';

            productosAleatorios.forEach(producto => {
                const div = document.createElement('div');
                div.classList.add('card');
                
                div.innerHTML = `
                   <img src="${producto.avatar2}" alt="${producto.nombre}" class="imagenproducto">
                    <h3 class="nombre">${producto.nombre}</h3>
                    <p class="Precio">${formatoPrecio(producto.Precio)}</p> <!-- Aquí formateamos el precio -->
                    <p class="clase">${producto.habilidades}</p>
                    <button class="boton_carrito">Añadir al carrito</button>
                `;
                
                contenedor.appendChild(div);
            });
        } else {
            console.error('Contenedor con id "muestras" no encontrado.');
        }
    }
});
