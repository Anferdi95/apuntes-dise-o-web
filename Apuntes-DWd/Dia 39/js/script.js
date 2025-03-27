function parallaxEffect (){
    const parallaxBg = document.querySelector('.parallax-bg');
    const elementoFlotante = document.querySelector('.parallax-elemento-flotante');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        console.log(scrollPos);

        // Mover el fondo 
        // Velocidad 0.3 significa que se mueva al 30% de la velocidad scroll
        parallaxBg.style.transform = 'translateY(${scrollPos * 0.3}px)';

        if(elementoFlotante){
            // Podemos aplicar multiples movimientos, ej: rotación
            let rotation = scrollPos * 0.05; // Una rotación pequeña

            // IMPORTANTE, 'transform:translateY()', es mejor para el rendimiento que cambiar 'top'
            elementoFlotante.style.transform = `translateY(-${scrollPos * 0.6}px)
            rotate(${rotation}deg)`;
        }
    });
}

if(window.matchMedia('(prefers-reduced-notion: reduce)').matches){
    //No aplicar efectos
    console.log("No aplicar parallax por decisión del usuario")
} else {
    // Aplicar efectos de parallax
    console.log("Se aplica el parallax")
    parallaxEffect();
}