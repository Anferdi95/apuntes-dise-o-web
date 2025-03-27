// Función principal que inicializa todo
function initParallax() {

    const parallaxContainers = document.querySelectorAll('.parallax-contenedor');
    if (parallaxContainers.length === 0) {
        console.log("No se encontraron contenedores parallax.");
        return;
    }

    const viewportHeight = window.innerHeight;
    let ticking = false;

    // --- Función que calcula y aplica los transforms ---
    function updateParallax() {
        parallaxContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            // Solo procesar si el contenedor está potencialmente visible o cerca
            // Ampliamos un poco el margen para que los efectos empiecen antes/terminen después
            const isPotentiallyVisible = rect.top < viewportHeight * 1.5 && rect.bottom > -viewportHeight * 0.5;


            const bg = container.querySelector('.parallax-bg');
            const flotante = container.querySelector('.parallax-flotante');

            // Calcular diff solo si es potencialmente visible y hay elementos
            if (isPotentiallyVisible && (bg || flotante)) {
                const elementCenterY = rect.top + rect.height / 2;
                const viewportCenterY = viewportHeight / 2;
                // diff: Distancia (+/-) del centro del elemento al centro del viewport
                // Positivo si el elemento está *debajo* del centro del viewport
                // Negativo si el elemento está *encima* del centro del viewport
                const diff = elementCenterY - viewportCenterY;

                // Normalizar diff respecto a la mitad del viewport (-1 a 1 aprox. dentro del viewport)
                // Usamos viewportHeight * 0.6 o 0.7 para que el efecto completo ocurra un poco antes de salir de pantalla
                const normalizedDiff = diff / (viewportHeight * 0.6); // Ajusta 0.6 si quieres que el efecto sea más rápido/lento

                // --- 1. Mover el Fondo ---
                if (bg) {
                    const speedBg = 0.3;
                    // Movimiento relativo al centro (suave)
                    const translateYBg = diff * speedBg * -1; // Invertir para que suba al scrollear hacia abajo
                    bg.style.transform = `translateY(${translateYBg.toFixed(2)}px)`;
                }

                // --- 2. Mover/Animar Elemento Flotante ---
                if (flotante) {
                    const types = (flotante.dataset.parallaxType || 'moveY').split(',');
                    const speedFlotante = parseFloat(flotante.dataset.parallaxSpeed) || 0.5;
                    const direction = parseInt(flotante.dataset.parallaxDirection) || 1;

                    let transformString = '';
                    let translateX = 0;
                    let translateY = 0;
                    let rotate = 0;
                    let scale = 1; // Empezar con escala 1
                    let opacity = 1; // Empezar con opacidad 1

                    types.forEach(type => {
                        const effectiveSpeed = speedFlotante * direction;
                        switch (type.trim()) {
                            case 'moveY':
                                translateY = diff * effectiveSpeed * -1;
                                break;
                            case 'moveX':
                                translateX = diff * effectiveSpeed * -1;
                                break;
                            case 'rotate':
                                const maxRotation = 45; // Grados máximos
                                // Usar normalizedDiff para la rotación, clamp para limitar
                                rotate = Math.max(-maxRotation, Math.min(maxRotation, normalizedDiff * maxRotation * effectiveSpeed));
                                break;

                            // --- Caso Scale Refinado ---
                            case 'scale':
                                // Escala desde 1 (centro) hasta un mínimo (bordes)
                                const minScale = 0.5; // Escala mínima en los bordes (ajustable)
                                // factor será 0 en el centro, 1 en los bordes (o más allá)
                                const scaleFactor = Math.min(1, Math.abs(normalizedDiff));
                                // Interpolar entre 1 y minScale usando el factor
                                scale = 1 - (scaleFactor * (1 - minScale) * effectiveSpeed);
                                // Asegurarse de no ir por debajo de minScale o por encima de 1 (si speed>1)
                                scale = Math.max(minScale, Math.min(1, scale));
                                break;

                            // --- Caso Opacity Refinado ---
                            case 'opacity':
                                // Opacidad desde 1 (centro) hasta 0 (bordes)
                                const minOpacity = 0; // Opacidad mínima (generalmente 0)
                                // Usamos el mismo scaleFactor (0 centro, 1 bordes)
                                const opacityFactor = Math.min(1, Math.abs(normalizedDiff));
                                // Interpolar entre 1 y minOpacity
                                opacity = 1 - (opacityFactor * (1 - minOpacity) * effectiveSpeed);
                                // Clamping entre 0 y 1
                                opacity = Math.max(0, Math.min(1, opacity));
                                break;

                        } // Fin Switch
                    }); // Fin forEach Type

                    // Construir transform string
                    if (translateX !== 0) transformString += ` translateX(${translateX.toFixed(2)}px)`;
                    if (translateY !== 0) transformString += ` translateY(${translateY.toFixed(2)}px)`;
                    if (rotate !== 0) transformString += ` rotate(${rotate.toFixed(2)}deg)`;
                    // Añadir scale si se calculó (siempre se calcula, pero empieza en 1)
                    transformString += ` scale(${scale.toFixed(2)})`;

                    flotante.style.transform = transformString.trim();
                    // Aplicar opacidad directamente (si se calculó, si no, será 1)
                    flotante.style.opacity = opacity.toFixed(2);

                    container.classList.add('is-interacting'); // Clase mientras se interactúa

                } // Fin if flotante

            } else {
                // Si no es visible, opcionalmente resetear o quitar clase
                container.classList.remove('is-interacting');
                // Podrías resetear aquí si quieres que "salte" a la posición inicial al salir
                // if (bg) bg.style.transform = 'translateY(0px)';
                // if (flotante) {
                //    flotante.style.transform = ''; // Resetea a CSS
                //    flotante.style.opacity = '1'; // Resetea opacidad
                // }
            } // Fin if isPotentiallyVisible
        }); // Fin forEach container

        ticking = false;
    } // Fin updateParallax


    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Llamada inicial
    updateParallax();

} // Fin initParallax


// --- Punto de Entrada ---
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('Parallax desactivado (prefers-reduced-motion: reduce).');
    document.body.classList.add('reduced-motion');
} else {
    console.log('Parallax activado.');
    initParallax();
}