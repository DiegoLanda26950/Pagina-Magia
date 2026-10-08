
// Endpoint real de nuestra API Gateway.
const API_URL = 'https://acyu0vw8t5.execute-api.us-east-1.amazonaws.com/dev/Entradas';

// Función para enviar una compra a AWS.
async function comprarEntrada(nombre, email, entradas) {

    const payload = {
        nombre: nombre,
        email: email,
        entradas: entradas
    };

    console.log('Datos enviados:', payload);

    try {

        const response = await fetch(API_URL, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.error || 'Error al realizar la compra'
            );
        }

        return result;

    } catch (error) {

        console.error('Error API:', error);

        throw error;
    }
}
