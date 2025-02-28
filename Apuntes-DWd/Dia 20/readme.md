btnDireccion.addEventListener("click", () => {
    let menu = document.getElementById("btnDireccion"); // Asegúrate de que el menú tiene este ID
    menu.classList.toggle("u-flexCol");

    let spanTexto = btnDireccion.querySelector("span2");

    if (menu.classList.contains("u-flexCol")) {
        span2Texto.innerText = "Vertical";
        menu.style.transform = "rotate(90deg)";
        menu.style.transformOrigin = "left top"; // Punto de rotación en la esquina superior izquierda
    } else {
        span2Texto.innerText = "Horizontal";
        menu.style.transform = "rotate(0deg)";
    }
});
