
const infoButton = document.getElementById("infoButton");
const ticketButton = document.getElementById("ticketButton");
const message = document.getElementById("message");


// Botón de información

infoButton.addEventListener("click", () => {

    document.getElementById("artistas").scrollIntoView({
        behavior: "smooth"
    });

});


// Botón de entradas

ticketButton.addEventListener("click", () => {

    message.textContent =
        "✨ ¡Entrada reservada! Nos vemos en el festival.";

});

