// Botón "Descubre el festival"
const infoButton = document.getElementById('infoButton');

if (infoButton) {

    infoButton.addEventListener('click', () => {

        document.getElementById('artistas').scrollIntoView({
            behavior: 'smooth'
        });

    });

}


// Formulario de compra
const ticketForm = document.getElementById('ticketForm');
const mensajeCompra = document.getElementById('mensajeCompra');

if (ticketForm) {

    ticketForm.addEventListener('submit', async (event) => {

        // Evitamos que la página se recargue.
        event.preventDefault();

        // Recogemos los datos del formulario.
        // Buscamos los campos DENTRO del formulario para evitar
        // confusiones con otros elementos que tengan el mismo id
        // (por ejemplo, la sección "entradas" del menú).
        const nombre = ticketForm.querySelector('#nombre').value.trim();
        const email = ticketForm.querySelector('#email').value.trim();
        const entradas = Number(
            ticketForm.querySelector('#entradas').value
        );

        // Validamos antes de enviar nada a la API.
        if (!nombre || !email || !Number.isInteger(entradas) || entradas < 1) {
            mensajeCompra.textContent =
                '⚠️ Revisa los datos: nombre, email y un número de entradas válido.';
            return;
        }

        // Mensaje mientras se procesa la compra.
        mensajeCompra.textContent = '⏳ Procesando compra...';

        try {

            // Enviamos los datos a nuestra API de AWS.
            const resultado = await comprarEntrada(
                nombre,
                email,
                entradas
            );

            console.log('Compra realizada:', resultado);

            // Mostramos el resultado al usuario.
            mensajeCompra.textContent =
                '✨ ¡Compra realizada correctamente! Nos vemos en el festival.';

            // Limpiamos el formulario.
            ticketForm.reset();

        } catch (error) {

            console.error('Error en la compra:', error);

            mensajeCompra.textContent =
                '❌ No se ha podido realizar la compra. Inténtalo de nuevo.';

        }

    });

}