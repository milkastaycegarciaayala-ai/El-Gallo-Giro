document.addEventListener("DOMContentLoaded", function () {

    console.log("EL GALLO GIRO - Página cargada correctamente.");

    // Mensaje de bienvenida
    console.log("¡Bienvenido a EL GALLO GIRO!");

    // Botón de WhatsApp
    const whatsapp = document.querySelector(
        'a[href*="wa.me"]'
    );

    if (whatsapp) {
        whatsapp.addEventListener("click", function () {
            console.log("El cliente está realizando un pedido por WhatsApp.");
        });
    }

    // Botón de teléfono
    const telefono = document.querySelector(
        'a[href^="tel:"]'
    );

    if (telefono) {
        telefono.addEventListener("click", function () {
            console.log("El cliente está realizando una llamada.");
        });
    }

});